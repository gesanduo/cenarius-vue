# Pre-Processors

This boilerplate has pre-configured CSS extraction for most popular CSS pre-processors including LESS, Sass, Stylus, and PostCSS. To use a pre-processor, all you need to do is install the appropriate webpack loader for it. For example, to use Sass:
该样板为大多数流行的CSS预处理器（包括LESS，Sass，Stylus和PostCSS）预先配置了CSS提取。 要使用预处理器，您只需为其安装相应的webpack加载程序即可。 例如，要使用Sass：

``` bash
npm install sass-loader node-sass --save-dev
```

Note you also need to install `node-sass` because `sass-loader` depends on it as a peer dependency.
注意你也需要安装`node-sass`，因为`sass-loader`依赖于它作为一个对等的依赖。

### Using Pre-Processors inside Components

Once installed, you can use the pre-processors inside your `*.vue` components using the `lang` attribute on `<style>` tags:
安装完成后，您可以使用`<style>`标签上的`lang`属性在`* .vue`组件中使用预处理器：

``` html
<style lang="scss">
/* write Sass! */
</style>
```

### A note on Sass syntax

- `lang="scss"` corresponds to the CSS-superset syntax (with curly braces and semicolons).
- `lang =“scss”`对应于CSS超集句法（带花括号和分号）。
- `lang="sass"` corresponds to the indentation-based syntax.
- `lang =“sass”`对应于基于缩进的语法。

### PostCSS

Styles in `*.vue` files and style files (`*.css`, `*.scss` etc) are piped through PostCSS by default, so you don't need to use a specific loader for it.
`* .vue`文件和样式文件（`* .css`，`* .scss`等）中的样式默认通过PostCSS传送，因此您不需要使用特定的加载器。

You can simply add PostCSS plugins you want to use to the `.postcssrc.js` file in your project's root directory:
您可以简单地将您想使用的PostCSS插件添加到项目根目录下的`.postcssrc.js`文件中：

``` js
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {}
  }
}
```

See [vue-loader's related documentation](http://vuejs.github.io/vue-loader/en/features/postcss.html) for more details.
更多详细信息，请参阅[vue-loader's related documentation](http://vuejs.github.io/vue-loader/en/features/postcss.html)。

### Standalone CSS Files

To ensure consistent extraction and processing, it is recommended to import global, standalone style files from your root `App.vue` component, for example:
为确保一致的提取和处理，建议从根`App.vue`组件导入全局独立样式文件，例如：

``` html
<!-- App.vue -->
<style src="./styles/global.less" lang="less"></style>
```

Note you should probably only do this for the styles written by yourself for your application. For existing libraries e.g. Bootstrap or Semantic UI, you can place them inside `/static` and reference them directly in `index.html`. This avoids extra build time and also is better for browser caching. (See [Static Asset Handling](static.md))
请注意，您应该只对自己为您的应用程序编写的样式执行此操作。 对于现有的库例如 Bootstrap或Semantic UI，你可以把它们放在`/static`中，并直接在`index.html`中引用它们。 这避免了额外的构建时间，对浏览器缓存也更好。 （(See [Static Asset Handling](static.md))