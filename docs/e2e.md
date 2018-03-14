# End-to-end Testing

This boilerplate uses [Nightwatch.js](http://nightwatchjs.org) for e2e tests. Nightwatch.js is a highly integrated e2e test runner built on top of Selenium. This boilerplate comes with Selenium server and chromedriver binaries pre-configured for you, so you don't have to mess with these yourself.
该样板使用[Nightwatch.js]（http://nightwatchjs.org）进行e2e测试。 Nightwatch.js是在Selenium之上构建的高度集成的e2e测试运行器。 该样板附带Selenium服务器和chromedriver二进制文件，可供您预先配置，因此您不必自己琢磨它们。

Let's take a look at the files in the `test/e2e` directory:
我们来看看`test / e2e`目录中的文件：

- `runner.js`

  A Node.js script that starts the dev server, and then launches Nightwatch to run tests against it. This is the script that will run when you run `npm run e2e`.
  启动开发服务器的Node.js脚本，然后启动Nightwatch以对其运行测试。 这是运行`npm run e2e`时将运行的脚本。

- `nightwatch.conf.js`

  Nightwatch configuration file. See [Nightwatch's docs on configuration](http://nightwatchjs.org/gettingstarted#settings-file) for more details.
  守夜配置文件。 有关更多详细信息，请参阅[Nightwatch关于配置的文档]（http://nightwatchjs.org/gettingstarted#settings-file）。

- `custom-assertions/`

  Custom assertions that can be used in Nightwatch tests. See [Nightwatch's docs on writing custom assertions](http://nightwatchjs.org/guide#writing-custom-assertions) for more details.
  可以在Nightwatch测试中使用的自定义断言。 有关更多详细信息，请参见[编写自定义断言的Nightwatch文档]（http://nightwatchjs.org/guide#writing-custom-assertions）。

- `specs/`

  Your actual tests! See [Nightwatch's docs on writing tests](http://nightwatchjs.org/guide#writing-tests) and [API reference](http://nightwatchjs.org/api) for more details.
  你的实际测试！ 有关更多详细信息，请参阅[编写测试的Nightwatch文档]（http://nightwatchjs.org/guide#writing-tests）和[API参考]（http://nightwatchjs.org/api）。

### Running Tests in More Browsers

To configure which browsers to run the tests in, add an entry under "test_settings" in [`test/e2e/nightwatch.conf.js`](https://github.com/vuejs-templates/webpack/blob/master/template/test/e2e/nightwatch.conf.js#L17-L39) , and also the `--env` flag in [`test/e2e/runner.js`](https://github.com/vuejs-templates/webpack/blob/master/template/test/e2e/runner.js#L15). If you wish to configure remote testing on services like SauceLabs, you can either make the Nightwatch config conditional based on environment variables, or use a separate config file altogether. Consult [Nightwatch's docs on Selenium](http://nightwatchjs.org/guide#selenium-settings) for more details.
要配置运行测试的浏览器，请在[`test / e2e / nightwatch.conf.js`]（https://github.com/vuejs-templates/webpack/blob/master/）中的“test_settings”下添加一个条目 template / test / e2e / nightwatch.conf.js＃L17-L39）以及[`test / e2e / runner.js`]中的`--env`标志（https://github.com/vuejs-templates/webpack/blob/master/template/test/e2e/runner.js#L15）。 如果你想配置像SauceLabs这样的服务的远程测试，你可以根据环境变量设置有条件的Nightwatch配置，或者完全使用一个单独的配置文件。 有关更多详细信息，请参阅[Selenium上的Nightwatch文档]（http://nightwatchjs.org/guide#selenium-settings）。
