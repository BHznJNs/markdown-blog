export default {
    siteDescription: "<h1>" +
"<a href='https://github.com/BHznJNs'>BHznJNs</a> "+
"的 Markdown 静态博客站, 使用 VanillaJS 构建。" +
"</h1>",
    enableRSS: {
        value: true,
        ignoreDir: [
            // directories in `static`
            "学习笔记/"
        ]
    },
    enableNewest: {
        value: true,
        ignoreDir: []
    },
    pageCapacity: 10,
}