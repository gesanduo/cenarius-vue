# 单元测试

This project offers two options for unit testing:
这个项目提供2个单元测试的选项
1. Jest
2. Karma and Mocha.


## Jest

- [Jest](https://facebook.github.io/jest/): the test runner that launches JSDOM runs the tests and reports the results to us.
[Jest](https://facebook.github.io/jest/):这些测试任务在JSDOM跑测试用例并且发送结果给我们
### Files

- `setup.js`

  Jest runs this file before it runs the unit tests. It sets the Vue production tip to false.
  在运行单元测试之前，它运行这个文件。它集合Vue生产提示错误。

### Mocking Dependencies

The Jest boilerplate comes with the ability to mock dependencies. See the [mock functions guide](https://facebook.github.io/jest/docs/mock-functions.html) for more details.
这个Jest的样板来自mock依赖的能力，更多详情看[mock functions guide](https://facebook.github.io/jest/docs/mock-functions.html)

## Karma and Mocha

- [Karma](https://karma-runner.github.io/): the test runner that launches browsers, runs the tests and reports the results to us.
- [Karma](https://karma-runner.github.io/): 测试任务在浏览器启动，跑测试用例和发送结果给我们。
- [karma-webpack](https://github.com/webpack/karma-webpack): the plugin for Karma that bundles our tests using Webpack.
- [karma-webpack](https://github.com/webpack/karma-webpack): 这个是karma的webpack插件用来压缩测试用例。
- [Mocha](https://mochajs.org/): the test framework that we write test specs with.
- [Mocha](https://mochajs.org/): 我们编写测试规范的测试框架
- [Chai](http://chaijs.com/): test assertion library that provides better assertion syntax.
- [Chai](http://chaijs.com/): 测试库，它提供更好的断言语法
- [Sinon](http://sinonjs.org/): test utility library that provides spies, stubs and mocks.
- [Sinon](http://sinonjs.org/): 测试工具库提供spies, stubs and mocks.
Chai and Sinon are integrated using [karma-sinon-chai](https://github.com/kmees/karma-sinon-chai), so all Chai interfaces (`should`, `expect`, `assert`) and `sinon` are globally available in test files.
Chai和Sinon都使用了 [karma-sinon-chai](https://github.com/kmees/karma-sinon-chai),所有Chai接口(`should`, `expect`, `assert`)和`sinon`在测试文件中可以全局使用
### Files

- `index.js`

  This is the entry file used by `karma-webpack` to bundle all the test code and source code (for coverage purposes). You can ignore it for the most part.
  'index.js'是`karma-webpack`的入口文件，用来压缩测试代码和源代码，大部分情况下你可以忽略它。

- `specs/`

  This directory is where you write your actual tests. You can use full ES2015+ and all supported Webpack loaders in your tests.
  'specs/'这个路径是你要写真实测试用例的地方，你可以用ES2015的所以语法和支持所以webpack loaders在这些测试用例

- `karma.conf.js`

  This is the Karma configuration file. See [Karma docs](https://karma-runner.github.io/) for more details.
  这个文件是Karma配置文件，通过[Karma docs](https://karma-runner.github.io/)获取详细信息

### Running Tests in More Browsers

You can run the tests in multiple real browsers by installing more [karma launchers](https://karma-runner.github.io/1.0/config/browsers.html) and adjusting the `browsers` field in `test/unit/karma.conf.js`.
你可以通过安装更多的[karma launchers](https://karma-runner.github.io/1.0/config/browsers.html)运行测试用例在大量真实的浏览器上，然后在`test/unit/karma.conf.js`文件调整`browsers`字段
### Mocking Dependencies

The Karma unit test boilerplate comes with [inject-loader](https://github.com/plasticine/inject-loader) installed by default. For usage with `*.vue` components, see [vue-loader docs on testing with mocks](http://vue-loader.vuejs.org/en/workflow/testing-with-mocks.html).
Karma单元测试样板默认安装了[inject-loader](https://github.com/plasticine/inject-loader) 。有关`* .vue`组件的用法，请参见[vue-loader docs on testing with mocks](http://vue-loader.vuejs.org/en/workflow/testing-with-mocks.html).