# vue-webpack-模板

> 全功能Webpack，包含热重载，单元测试和CSS提取。

> 此模板与Vue 2.0兼容。

## 文档

- [关于此模板](http://macula.top/cenarius-vue)：回答了一些常见问题，并且每个部分都有详尽解释
- [关于Vue 2.0](http://vuejs.org/guide/)：关于如何使用Vue

## 使用

这是[vue-cli](https://github.com/vuejs/vue-cli)的项目模板。 **建议使用npm 3+来创建更高效​​的依赖树**

``` bash
$ npm install -g vue-cli
$ vue init macula-projects/cenarius-vue my-project
$ cd my-project
$ npm install
$ npm run dev
```

这将使用`master`分支。如果您想使用最新版本的模板，请执行以下操作：

``` bash
$ vue init macula-projects/cenarius-vue#develop my-project
```

：警告：**开发分支是不稳定的，可能包含错误或根本不构建，因此使用时需要您自担风险。**

默认情况下，开发服务器将在端口8080上运行。如果该端口已在您的机器上使用，则将使用下一个空闲端口。

## 包含命令

- `npm run dev`：一流的开发体验。
  - 用于单个Vue文件组件的Webpack +`vue-loader`。
  - 状态保存热重载
  - 状态保留编译错误覆盖
  - 保存Lint
  - Source maps

- `npm run build`：构建生产版本。
  - 使用[UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony)做JS压缩缩小JavaScript。
  - 用[html-minifier](https://github.com/kangax/html-minifier)做HTML压缩缩小HTML。
  - 使用[cssnano](https://github.com/ben-eb/cssnano)将所有组件的CSS提取到单个文件中，并压缩。
  - 以哈希作为版本的静态资源可实现长期缓存，自动生成具有合适URL的`index.html`。
  - 使用 `npm run build --report`来进行bundle大小分析.

- `npm run unit`：使用[Jest](https://facebook.github.io/jest/docs/getting-started.html)在[JSDOM](https://github.com/tmpvar/jsdom)中运行单元测试，或者用Karma + Mocha + karma-webpack在PhantomJS中运行。
  - 在测试文件中支持ES2015+。
  - 轻松mocking。

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.
- `npm run e2e`：使用[Nightwatch](http://nightwatchjs.org/)运行端到端测试。
  - 在多个浏览器中并行测试。
  - 开箱即用一个命令：
    - 自动处理Selenium和chromedriver依赖关系。
    - 自动生成Selenium服务器。

### Fork

你可以fork这个仓库来创建你自己的模板，并用`vue-cli`来使用它：

``` bash
vue init username/repo my-project
```
