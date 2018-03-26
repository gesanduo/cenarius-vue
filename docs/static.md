# 处理 Static Assets

You will notice in the project structure we have two directories for static assets: `src/assets` and `static/`. What is the difference between them?
你会注意到项目结构用2个静态资源的目录：`src/assets` 和 `static/`，他们的区别是什么？

### Webpacked Assets

To answer this question, we first need to understand how Webpack deals with static assets. In `*.vue` components, all your templates and CSS are parsed by `vue-html-loader` and `css-loader` to look for asset URLs. For example, in `<img src="./logo.png">` and `background: url(./logo.png)`, `"./logo.png"` is a relative asset path and will be **resolved by Webpack as a module dependency**.
要回答这个问题，我们首先要理解webpack是怎么处理静态资源的，在'*.vue'组件，所有你的模板和css是用`vue-html-loader`和`css-loader`解析成资源链接，比如在 `<img src="./logo.png">`和 `background: url(./logo.png)`, `"./logo.png"` 是一个相对路径并且会被webpack解析成一个模块依赖。

Because `logo.png` is not JavaScript, when treated as a module dependency, we need to use `url-loader` and `file-loader` to process it. This template has already configured these loaders for you, so you get features such as filename fingerprinting and conditional base64 inlining for free, while being able to use relative/module paths without worrying about deployment.
由于`logo.png`不是js文件，要作为模块依赖项，我们需要用`url-loader`和 `file-loader`来处理,这个模板已经配置了这些loader，你可以用文件指纹和base64的内联的这些特性，同时使用相对路径而不必担心部署模块。

Since these assets may be inlined/copied/renamed during build, they are essentially part of your source code. This is why it is recommended to place Webpack-processed static assets inside `/src`, alongside other source files. In fact, you don't even have to put them all in `/src/assets`: you can organize them based on the module/component using them. For example, you can put each component in its own directory, with its static assets right next to it.
由于这些资产可能在构建过程中被内联/复制/重命名，因此它们基本上是源代码的一部分。 这就是为什么建议将Webpack处理过的静态资源和其他源文件放在`/src`里面的原因。 实际上，你甚至不需要把它们都放在`/src /assets`中：你可以根据模块/组件使用它们来组织它们。 例如，您可以将每个组件放在其自己的目录中，其静态资产就位于其旁边。

### Asset Resolving Rules

- **Relative URLs**, e.g. `./assets/logo.png` will be interpreted as a module dependency. They will be replaced with an auto-generated URL based on your Webpack output configuration.
- **相对url**，例如 `./assets/logo.png`将被解释为模块依赖项。 它们将被替换为基于您的Webpack输出配置的自动生成的URL。

- **Non-prefixed URLs**, e.g. `assets/logo.png` will be treated the same as the relative URLs and translated into `./assets/logo.png`.
- **未加前缀的url**，例如 `assets/logo.png`将被视为相对URL并翻译成`./assets/logo.png`。

- **URLs prefixed with `~`** are treated as a module request, similar to `require('some-module/image.png')`. You need to use this prefix if you want to leverage Webpack's module resolving configurations. For example if you have a resolve alias for `assets`, you need to use `<img src="~assets/logo.png">` to ensure that alias is respected.
- **以`〜`为前缀的网址**被视为模块请求，类似于`require（'some-module/image.png'）`， 如果你想利用Webpack的模块解析配置，你需要使用这个前缀。 例如，你需要使用`<img src="~assets/logo.png">`来确保别名得到重视。

- **Root-relative URLs**, e.g. `/assets/logo.png` are not processed at all.
- **根-相对URLs**，例如 `/assets/logo.png`根本不处理。

### Getting Asset Paths in JavaScript

In order for Webpack to return the correct asset paths, you need to use `require('./relative/path/to/file.jpg')`, which will get processed by `file-loader` and returns the resolved URL. For example:
为了让Webpack返回正确的资产路径，您需要使用`require（'./relative/path/to/file.jpg'）`，它将被`file-loader`处理并返回解析后的URL。 例如：

``` js
computed: {
  background () {
    return require('./bgs/' + this.id + '.jpg')
  }
}
```

**Note the above example will include every image under `./bgs/` in the final build.** This is because Webpack cannot guess which of them will be used at runtime, so it includes them all.
**请注意，上面的例子将在最终版本的`./bgs/`下包含所有图像。**这是因为Webpack无法猜测它们在运行时会被使用哪一个，所以它包含了所有这些。

### "Real" Static Assets

In comparison, files in `static/` are not processed by Webpack at all: they are directly copied to their final destination as-is, with the same filename. You must reference these files using absolute paths, which is determined by joining `build.assetsPublicPath` and `build.assetsSubDirectory` in `config.js`.
相比之下，`static/`中的文件根本不会被Webpack处理：它们直接被复制到它们的最终目的地，具有相同的文件名。 您必须使用绝对路径来引用这些文件，这是通过在`config.js`中加入`build.assetsPublicPath`和`build.assetsSubDirectory`确定的。

As an example, with the following default values:
作为示例，使用以下默认值：

``` js
// config/index.js
module.exports = {
  // ...
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
}
```

Any file placed in `static/` should be referenced using the absolute URL `/static/[filename]`. If you change `assetSubDirectory` to `assets`, then these URLs will need to be changed to `/assets/[filename]`.
任何放在`static/`中的文件都应该使用绝对URL`/static/[filename]`来引用。 如果您将`assetSubDirectory`更改为`assets`，那么这些URL将需要更改为`/assets/[filename]`。

We will learn more about the config file in the section about [backend integration](backend.md).
我们将在关于[backend integration](backend.md)的部分中了解关于配置文件的更多信息。
