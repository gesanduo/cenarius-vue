# vue-webpack-boilerplate

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.
> 全功能的Webpack设置，包括热重载，省电保存，单元测试和CSS提取。

> This template is Vue 2.0 compatible. For Vue 1.x use this command: `vue init macula-projects/cenarius-vue#1.0 my-project`
> 此模板与Vue 2.0兼容。对于Vue 1.x，请使用以下命令：`vue init macula-projects / cenarius-vue＃1.0 my-project`

## Documentation

- [For this template](http://macula.top/cenarius-vue): common questions specific to this template are answered and each part is described in greater detail
- [For this template](http://macula.top/cenarius-vue):回答更更详细地描述此模板特有的常见问题
- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template
- [For Vue 2.0](http://vuejs.org/guide/):关于如何使用Vue的信息，并非特定于此模板

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**
这是[vue-cli](https://github.com/vuejs/vue-cli).的项目模板。 **建议使用npm 3+来创建更高效​​的依赖树**

``` bash
$ npm install -g vue-cli
$ vue init macula-projects/cenarius-vue my-project
$ cd my-project
$ npm install
$ npm run dev
```

This will scaffold the project using the `master` branch. If you wish to use the latest version of the webpack template, do the following instead:
这将使用`master`分支来支撑项目。如果您想使用分支模板，请执行以下操作：

``` bash
$ vue init macula-projects/cenarius-vue#develop my-project
```

:warning: **The develop branch is not considered stable and can contain bugs or not build at all, so use at your own risk.**
：警告：**开发分支被认为是不稳定的，可以包含错误或根本不构建，因此使用时需要您自担风险。**

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.
默认情况下，开发服务器将在端口8080上运行。如果该端口已在您的机器上使用，则将使用下一个空闲端口。

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps
- `npm run dev`：一流的开发经验。
  - 用于单个文件Vue组件的Webpack + `vue-loader`。
  - 状态保存热重载
  - 状态保留编译错误覆盖
  - 使用ESLint进行保存
  - 源地图

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.
- `npm run buil`：生产就绪版本。
  - 使用 [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony)缩小JavaScript.
  - 用 [html-minifier](https://github.com/kangax/html-minifier)缩小HTML.
  - 将所有组件的CSS提取到单个文件中，并使用 [cssnano](https://github.com/ben-eb/cssnano)进行缩小.
  - 静态资产使用版本哈希编译以实现高效的长期缓存，以及自动生成的生成`index.html` 并为这些生成的资产提供适当的URL.
  - 使用 `npm run build --report`来构建 bundle.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking.
- `npm run unit`：单元测试用[JSDOM](https://github.com/tmpvar/jsdom)在[Jest](https://facebook.github.io/jest/)中运行，或者在PhantomJS中用Karma + Mocha + karma-webpack。
  - 在测试文件中支持ES2015 +。
  - 轻松mocking。

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.
- `npm run e2e`：使用[Nightwatch](http://nightwatchjs.org/)进行端到端测试。
   - 在多个浏览器中并行运行测试。
   - 开箱即用一个命令：
     -  Selenium和chromedriver依赖关系自动处理。
     - 自动生成Selenium服务器。

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:
你可以fork这个repo来创建你自己的样板，并用`vue-cli`来使用它：

``` bash
vue init username/repo my-project
```
