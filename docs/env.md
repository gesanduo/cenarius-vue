# Environment Variables

Sometimes it is practical to have different config values according to the environment that the application is running in.
有时根据应用程序运行的环境具有不同的配置值是可行的。

As an example:
举个例子：

```js
// config/prod.env.js
module.exports = {
  NODE_ENV: '"production"',
  DEBUG_MODE: false,
  API_KEY: '"..."' // this is shared between all environments
}

// config/dev.env.js
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true // this overrides the DEBUG_MODE value of prod.env
})

// config/test.env.js
module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
```

> **Note:** string variables need to be wrapped into single and double quotes `'"..."'`
> **注意：** 字符串变量需要被包裹成单引号和双引号`'“...”“`

So, the environment variables are:
所以，环境变量是：
- Production
    - NODE_ENV   = 'production',
    - DEBUG_MODE = false,
    - API_KEY    = '...'
- Development
    - NODE_ENV   = 'development',
    - DEBUG_MODE = true,
    - API_KEY    = '...'
- Testing
    - NODE_ENV   = 'testing',
    - DEBUG_MODE = true,
    - API_KEY    = '...'

As we can see, `test.env` inherits the `dev.env` and the `dev.env` inherits the `prod.env`.
正如我们所见，`test.env`继承`dev.env`，`dev.env`继承`prod.env`。

### Usage

It is simple to use the environment variables in your code. For example:
在代码中使用环境变量很简单。 例如：

```js
Vue.config.productionTip = process.env.NODE_ENV === 'production'
```
