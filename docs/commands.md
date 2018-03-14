# Build Commands

All build commands are executed via [NPM Scripts](https://docs.npmjs.com/misc/scripts).
所有构建命令都通过[NPM脚本]（https://docs.npmjs.com/misc/scripts）执行。

### `npm run dev`

> Starts a Node.js local development server. See [API Proxying During Development](proxy.md) for more details.
>启动一个Node.js本地开发服务器。 有关更多详细信息，请参阅[开发期间的API代理](proxy.md)。

- Webpack + `vue-loader` for single file Vue components.
- State preserving hot-reload
- State preserving compilation error overlay
- Lint-on-save with ESLint
- Source maps
- 用于单个文件Vue组件的Webpack +`vue-loader`。
- 状态保存热重载
- 状态保留编译错误覆盖
- 使用ESLint进行保存
- 源地图

### `npm run build`

> Build assets for production. See [Integrating with Backend Framework](backend.md) for more details.
>构建生产环境。 有关更多详细信息，请参见[与后端框架集成](backend.md)。

- JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
- HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
- CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
- All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
- 使用[UglifyJS v3]（https://github.com/mishoo/UglifyJS2/tree/harmony）缩小JavaScript。
- 用[html-minifier]（https://github.com/kangax/html-minifier）缩小了HTML。
- 将所有组件的CSS提取到单个文件中，并使用[cssnano]（https://github.com/ben-eb/cssnano）进行缩小。
- 使用版本哈希编译的所有静态资产可实现有效的长期缓存，并且会为这些生成的资产自动生成具有适当URL的生产`index.html`。

### `npm run unit`

> Run unit tests in JSDOM with [Jest](https://facebook.github.io/jest/docs/getting-started.html). See [Unit Testing](unit.md) for more details.
>使用[Jest]在JSDOM中运行单元测试（https://facebook.github.io/jest/docs/getting-started.html）。 有关更多详细信息，请参见[单元测试](unit.md)。

- Supports ES2015+ in test files.
- Easy [mocking](https://facebook.github.io/jest/docs/mock-functions.html).
- 在测试文件中支持ES2015 +。
- Easy [mocking](https://facebook.github.io/jest/docs/mock-functions.html).

### `npm run e2e`

> Run end-to-end tests with [Nightwatch](http://nightwatchjs.org/). See [End-to-end Testing](e2e.md) for more details.
>使用[Nightwatch]（http://nightwatchjs.org/）运行端到端测试。 有关更多详细信息，请参见[端到端测试](e2e.md) 。

- Run tests in multiple browsers in parallel.
- Works with one command out of the box:
  - Selenium and chromedriver dependencies automatically handled.
  - Automatically spawns the Selenium server.
- 在多个浏览器中并行运行测试。
- 开箱即用一个命令：
   - Selenium和chromedriver依赖关系自动处理。
   - 自动生成Selenium服务器。

### `npm run lint`

> Runs eslint and reports any linting errors in your code. See [Linter Configuration](linter.md)
>运行eslint并报告代码中的任何linting错误。 请参阅[Linter配置](linter.md)