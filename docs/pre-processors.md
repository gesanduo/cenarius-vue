# 预处理器

本模板配置了大多数流行的CSS预处理器（包括LESS，Sass，Stylus和PostCSS）。 要使用预处理器，您只需为其安装相应的webpack loader即可。例如，要使用Sass：

``` bash
npm install sass-loader node-sass --save-dev
```

注意：你也需要安装`node-sass`，因为`sass-loader`依赖于它。

### 在组件里用预处理器

Once installed, you can use the pre-processors inside your `*.vue` components using the `lang` attribute on `<style>` tags:
安装完成后，您可以在`* .vue`组件中使用`<style>`标签上的`lang`属性：

``` html
<style lang="scss">
/* write Sass! */
</style>
```

### Sass语法的一点提示

- `lang="scss"` 对应于CSS超集语法（带花括号和分号）。
- `lang="sass"` 对应于基于缩进的语法。

### PostCSS

`* .vue`文件和样式文件（`* .css`，`* .scss`等）默认使用PostCSS，因此您不需要使用特定的加载器。

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
详细信息，请参阅[vue-loader's related documentation](http://vuejs.github.io/vue-loader/en/features/postcss.html)。

### Standalone CSS Files

To ensure consistent extraction and processing, it is recommended to import global, standalone style files from your root `App.vue` component, for example:
为确保一致的提取和处理，建议从根`App.vue`组件导入全局独立样式文件，例如：

``` html
<!-- App.vue -->
<style src="./styles/global.less" lang="less"></style>
```

Note you should probably only do this for the styles written by yourself for your application. For existing libraries e.g. Bootstrap or Semantic UI, you can place them inside `/static` and reference them directly in `index.html`. This avoids extra build time and also is better for browser caching. (See [Static Asset Handling](static.md))
请注意，您应该在自己的应用里面编写样式。 对于现有的库例如 Bootstrap或Semantic UI，你可以把它们放在`/static`中，并直接在`index.html`中引用它们。 这避免了额外的构建时间，对浏览器缓存也更好。 （(See [Static Asset Handling](static.md))