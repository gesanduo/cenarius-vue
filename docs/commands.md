# 构建命令

所有构建命令都通过[NPM脚本]（https://docs.npmjs.com/misc/scripts）执行。

### `npm run dev`

>启动一个Node.js本地开发服务器。 更多详细信息，请参阅[开发期间的API代理](proxy.md)。

- 用于单个Vue文件组件的Webpack +`vue-loader`。
- 状态保存热重载
- 状态保留编译错误覆盖
- 保存Lint
- Source maps

### `npm run build`

> 构建生产环境的资源。 更多详细信息，请参见[与后端集成](backend.md)。

- 使用[UglifyJS v3]做JS压缩（https://github.com/mishoo/UglifyJS2/tree/harmony）缩小JavaScript。
- 用[html-minifier]做HTML压缩（https://github.com/kangax/html-minifier）缩小了HTML。
- 使用[cssnano]将所有组件的CSS提取到单个文件中，并压缩（https://github.com/ben-eb/cssnano）。
- 以哈希作为版本的静态资源可实现长期缓存，自动生成具有合适URL的`index.html`。

### `npm run unit`

> 使用[Jest]在JSDOM中运行单元测试（https://facebook.github.io/jest/docs/getting-started.html。更多详细信息，请参见[单元测试](unit.md)。

- 在测试文件中支持ES2015+。
- Easy [mocking](https://facebook.github.io/jest/docs/mock-functions.html).

### `npm run e2e`

> 使用[Nightwatch](http://nightwatchjs.org/)运行端到端测试。更多详细信息，请参见[端到端测试](e2e.md) 。

- 在多个浏览器中并行测试。
- 开箱即用一个命令：
   - 自动处理Selenium和chromedriver依赖关系。
   - 自动生成Selenium服务器。

### `npm run lint`

> 运行eslint并报告代码中的任何linting错误。 请参阅[Linter配置](linter.md)