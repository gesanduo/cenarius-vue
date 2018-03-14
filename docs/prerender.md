# Prerendering for SEO

If you want to prerender routes that will not significantly change once pushed to production, use this Webpack plugin: [prerender-spa-plugin](https://www.npmjs.com/package/prerender-spa-plugin), which has been tested for use with Vue. For pages that _do_ frequently change, [Prerender.io](https://prerender.io/) and [Netlify](https://www.netlify.com/pricing) both offer plans for regularly re-prerendering your content for search engines.
如果你想预先渲染一次推送到production时不会发生显着变化的路线，请使用这个Webpack插件：[prerender-spa-plugin]（https://www.npmjs.com/package/prerender-spa-plugin），它有 已经通过Vue使用测试。 对于频繁更改的网页，[Prerender.io]（https://prerender.io/）和[Netlify]（https://www.netlify.com/pricing）都会提供定期重新预渲染内容的计划 搜索引擎。

## Using `prerender-spa-plugin`

1. Install it as a dev dependency:
1. 将它作为开发依赖项安装：

```bash
npm install --save-dev prerender-spa-plugin
```

2. Require it in **build/webpack.prod.conf.js**:
2. 在**build/webpack.prod.conf.js**中Require它：

```js
// This line should go at the top of the file where other 'imports' live in
const PrerenderSpaPlugin = require('prerender-spa-plugin')
```

3. Configure it in the `plugins` array (also in **build/webpack.prod.conf.js**):
3. 在`plugins`数组中配置它（也在**build/webpack.prod.conf.js**中）：

```js
new PrerenderSpaPlugin(
  // Path to compiled app
  path.join(__dirname, '../dist'),
  // List of endpoints you wish to prerender
  [ '/' ]
)
```

If you also wanted to prerender `/about` and `/contact`, then that array would be `[ '/', '/about', '/contact' ]`.
如果你还想预渲染`/ about`和`/ contact`，那么这个数组就是`[ '/', '/about', '/contact' ]`。

4. Enable history mode for `vue-router`:
4. 启用`vue-router`的历史记录模式：
```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```
