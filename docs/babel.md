# Babel Configuration

This boilerplate uses [`babel-preset-env`](https://www.npmjs.com/package/babel-preset-env) for configuring babel. You can read more about it here - http://2ality.com/2017/02/babel-preset-env.html.
该样板使用[`babel-preset-env`]（https://www.npmjs.com/package/babel-preset-env）来配置babel。 你可以在以下链接阅读到更多相关信息 - http://2ality.com/2017/02/babel-preset-env.html。

> A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments.
> 自动根据您的目标浏览器或运行时环境来确定所需的Babel插件和填充，从而将ES2015 +编译为ES5的Babel预设。

It uses [`browserslist`](https://github.com/ai/browserslist) to parse this information, so we can use any [valid query format supported by `browserslist`](https://github.com/ai/browserslist#queries).
它使用[`browserslist`]（https://github.com/ai/browserslist）来解析这些信息，因此我们可以使用任何[browserslist`来有效查询支持的格式](https://github.com/ai/browserslist#queries).

However there is a caveat. `browserslist` recommends defining the target in a common place like `package.json` or in a `.browserslistrc` config file. This allows tools like [`autoprefixer`](https://github.com/postcss/autoprefixer) and [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat) to share the config. For this template, `browserslist` is configured in the `package.json`:
有一个警告。 `browserslist`建议在像'package.json`或者`.browserslistrc`配置文件这样的常见位置定义目标。 这允许像[`autoprefixer`]（https://github.com/postcss/autoprefixer）和[`eslint-plugin-compat`]（https://github.com/amilajack/eslint-plugin-compat）这样的工具 共享配置。 对于这个模板，在`package.json`中配置`browserslist`：

```json
{
  "...": "...",
  "browserslist": [ 
    "> 1%",全球浏览器使用率大于5%
    "last 2 versions", 每个浏览器中最新的两个版本。
    "not ie <= 8"
  ]
}
```

But the latest stable release of `babel-preset-env`, `v1.6.1` does not support loading the config from `package.json`. So the target environment is repeated in `.babelrc`. If you wish to change your target environment, please be sure to update both `package.json` and `.babelrc`. Note that this has been fixed in the beta version([`@babel/preset-env@7.0.0-beta.34`](https://github.com/babel/babel/tree/master/packages/babel-preset-env)) and the template will be updated once it is out of beta.
但是`babel-preset-env`，`v1.6.1`的最新稳定版本不支持从`package.json`加载配置。 所以目标环境在`.babelrc`中重复。 如果你想改变你的目标环境，请务必更新`package.json`和`.babelrc`。 请注意，这已在beta版本中修复（[`@ babel / preset-env @ 7.0.0-beta.34`]（https://github.com/babel/babel/tree/master/packages/babel- preset-env）），模板一旦超出测试版就会更新。

