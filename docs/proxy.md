# 开发期间的API代理

When integrating this boilerplate with an existing backend, a common need is to access the backend API when using the dev server. To achieve that, we can run the dev server and the API backend side-by-side (or remotely), and let the dev server proxy all API requests to the actual backend.
将此样板与现有后端集成时，通常需要在使用开发服务器时访问后端API。 为此，我们可以并行（或远程）运行开发服务器和API后端，并让开发服务器将所有API请求代理到实际的后端。

To configure the proxy rules, edit `dev.proxyTable` option in `config/index.js`. The dev server is using [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) for proxying, so you should refer to its docs for detailed usage. But here's a simple example:
要配置代理规则，编辑`config / index.js`中的`dev.proxyTable`选项。 dev服务器正在使用[http-proxy-middleware]（https://github.com/chimurai/http-proxy-middleware）进行代理，因此您应该参阅其文档以了解详细用法。 但是这里有一个简单的例子：

``` js
// config/index.js
module.exports = {
  // ...
  dev: {
    proxyTable: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

The above example will proxy the request `/api/posts/1` to `http://jsonplaceholder.typicode.com/posts/1`.
上面的例子将代理请求`/ api / posts / 1`到`http：// jsonplaceholder.typicode.com / posts / 1`。

## URL Matching

In addition to static urls you can also use glob patterns to match URLs, e.g. `/api/**`. See [Context Matching](https://github.com/chimurai/http-proxy-middleware#context-matching) for more details. In addition, you can provide a `filter` option that can be a custom function to determine whether a request should be proxied:
除了静态URL之外，您还可以使用全局模式来匹配网址，例如`/ API/ **`。 有关更多详细信息，请参见[上下文匹配]（https://github.com/chimurai/http-proxy-middleware#context-matching）。 另外，您可以提供一个`filter`选项，它可以是一个自定义函数，以确定是否应该代理请求：

``` js
proxyTable: {
  '**': {
    target: 'http://jsonplaceholder.typicode.com',
    filter: function (pathname, req) {
      return pathname.match('^/api') && req.method === 'GET'
    }
  }
}
```
