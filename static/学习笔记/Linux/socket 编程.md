# socket 编程

本文针对使用 TCP 协议的 socket 编程

## 服务端

### 创建 socket

```c
int socket_fd = socket(AF_INET, SOCK_STREAM, 0);
if (socket_fd == -1) {
    panic("socket: %s\n", strerror(errno));
}
```

### 绑定服务器地址

```c
int port = ...;
// 先创建 socket 地址结构体
struct sockaddr_in* socket_addr = malloc(sizeof(struct sockaddr_in));
socket_addr->sin_family = AF_INET; // IPv4
socket_addr->sin_port = htons(port); // set port
socket_addr->sin_addr.s_addr = htonl(INADDR_ANY); // accept any address 即绑定所有网卡

if (bindaddr) {
    // convert a address string, like "127.0.0.1",
    // into number form, like 0x7f000001,
    // and assign it to `socket_addr->sin_addr`
    // 绑定指定网卡
    int status_code = inet_pton(AF_INET, bindaddr, &socket_addr->sin_addr);
    if (status_code == 0) {
        close(socket_fd);
        panic("Invalid bind address\n");
    }
}

int status_code = bind(socket_fd, (struct sockaddr*)socket_addr, sizeof(struct sockaddr));
if (status_code == -1) {
    close(socket_fd);
    panic("socket bind: %s\n", strerror(errno));
}
```

### 监听 socket

```c
int status_code = listen(socket_fd, 64);
if (status_code == -1) {
    close(socket_fd);
    panic("listen: %s\n", strerror(errno));
}
```

- - -

### 接收客户端连接

```c
struct sockaddr_in socket_addr;
socklen_t socket_addr_len = sizeof(socket_addr);
int client_fd = accept(server_fd, (struct sockaddr*)&socket_addr, &socket_addr_len);
```

接收之后可以使用 ``read`` / ``recv`` 或者 ``write`` / ``send`` 进行数据传输。


## 客户端

### 创建 socket

```c
int socket_fd = socket(AF_INET, SOCK_STREAM, 0);
if (socket_fd == -1) {
    panic("socket: %s\n", strerror(errno));
}
```

### 创建服务器地址结构体

```c
char* addr = "127.0.0.1"; // 服务器 IP 地址 或 服务器域名
int port = ...; // 服务器端口

struct sockaddr_in* socket_addr = malloc(sizeof(struct sockaddr_in));
memset(socket_addr, 0, sizeof(socket_addr));
socket_addr->sin_family = AF_INET; // IPv4
socket_addr->sin_port = htons(port); // set port

int status_code = inet_aton(addr, &socket_addr->sin_addr);
if (status_code != 0) {
    return socket_addr;
}

// addr is invalid, maybe a hostname like `localhost`
struct hostent* he;
he = gethostbyname(addr);

if (he == NULL) {
    panic("can't resolve: %s\n", addr);
}
memcpy(&socket_addr->sin_addr, he->h_addr, sizeof(struct in_addr));
return socket_addr;
```

### 发起连接

```c
int status_code = connect(socket_fd, (struct sockaddr*)socket_addr, sizeof(struct sockaddr));
if (status_code == -1 && errno != EINPROGRESS) {
    close(socket_fd);
    panic("connect: %s\n", strerror(errno));
}
```

连接之后可以使用 ``read`` / ``recv`` 或者 ``write`` / ``send`` 进行数据传输
