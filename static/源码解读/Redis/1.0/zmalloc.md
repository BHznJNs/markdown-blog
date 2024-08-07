# zmalloc

``zmalloc`` 模块是 Redis 对 ``stdlib`` 中内存管理函数 ``malloc``、``realloc``、``free`` 等的再封装，Redis 内部的动态内存分配均通过此模块实现。

## zmalloc 函数实现解析

```c
static size_t used_memory = 0;

void *zmalloc(size_t size) {
    void *ptr = malloc(size+sizeof(size_t));

    if (!ptr) return NULL;
#ifdef HAVE_MALLOC_SIZE
    used_memory += redis_malloc_size(ptr);
    return ptr;
#else
    *((size_t*)ptr) = size;
    used_memory += size+sizeof(size_t);
    return (char*)ptr+sizeof(size_t);
#endif
}
```

这里存在一些由于操作系统差异的额外代码，我们暂且忽略

```c
static size_t used_memory = 0;

void *zmalloc(size_t size) {
    void *ptr = malloc(size+sizeof(size_t));
    if (!ptr) return NULL;
    *((size_t*)ptr) = size;
    used_memory += size+sizeof(size_t);
    return (char*)ptr+sizeof(size_t);
}
```

这里有一个比较迷惑的点：函数自身接受一个参数 size，即需要动态内存分配的大小（字节数），函数随后便将该值传递给 ``malloc`` 函数进行内存管理，但在传递的时候却又给 size 加上了一个 ``size_t`` 占用的空间。

这其实不难理解，让我们先往下看
```c
if (!ptr) return NULL; // 如果分配失败（内存已满）返回 NULL
*((size_t*)ptr) = size; // 给已分配内存的前若干位（取决于 size_t 的大小）赋值为 size
used_memory += size+sizeof(size_t); // 记录已使用内存
```

我们再看看 zmalloc 中 ``zfree`` 函数的实现：

```c
void zfree(void *ptr) {
#ifndef HAVE_MALLOC_SIZE
    void *realptr;
    size_t oldsize;
#endif

    if (ptr == NULL) return;
#ifdef HAVE_MALLOC_SIZE
    used_memory -= redis_malloc_size(ptr);
    free(ptr);
#else
    realptr = (char*)ptr-sizeof(size_t);
    oldsize = *((size_t*)realptr);
    used_memory -= oldsize+sizeof(size_t);
    free(realptr);
#endif
}
```

我们同样省略掉处理跨平台的额外代码，

```c
void zfree(void *ptr) {
    void *realptr;
    size_t oldsize;
    realptr = (char*)ptr-sizeof(size_t);
    oldsize = *((size_t*)realptr);
    used_memory -= oldsize+sizeof(size_t);
    free(realptr);
}
```

通过综合这两段代码我们便不难读懂，上文 zmalloc 在分配内存时额外请求了一个 ``size_t`` 的空间，并在这个空间中存储调用方实际需要的空间大小。

再看 zmalloc 函数的 return 语句，

```c
return (char*)ptr+sizeof(size_t);
```

该语句将 ptr 转化为 char 指针类型，再直接使用指针运算，加上一个 size_t 所需的空间。

```text
假设这是调用方实际需要的内存大小：
---------
| | | | |
---------

申请内存时加上了 sizeof(size_t)，实际申请到的内存：
-----------
| | | | | |
-----------

在第一个格子填上调用方需要的内存大小：
-----------
|4| | | | |
-----------

最后在返回指向这块内存时进行指针运算，防止调用方写入到存储内存大小的第一块内存：
-----------       -----------
|4| | | | |       |4| | | | |
-----------  -->  -----------
^                   ^
|                   |
```

为什么要转化为 char 指针类型？因为 char 占用内存的大小正好为一个字节，转化为 char 指针类型再进行运算更方便。当然，你也可以是使用
```c
(size_t*)ptr + 1
```
效果相同。

## zfree 函数实现解析

```c
void zfree(void *ptr) {
    void *realptr;
    size_t oldsize;
    realptr = (char*)ptr-sizeof(size_t); // 此处即为 ``(char*)ptr+sizeof(size_t)`` 的逆运算，获取 malloc 时实际返回的指针
    oldsize = *((size_t*)realptr); // 获取 zmalloc 时，调用方实际需要的内存大小
    used_memory -= oldsize+sizeof(size_t);
    free(realptr);
}
```

