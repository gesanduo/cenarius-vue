# Project Structure

``` bash
├── build/                      # webpack配置文件
│   └── ...
├── config/
│   ├── index.js                # 主项目配置
│   └── ...
├── src/
│   ├── main.js                 # app入口文件
│   ├── App.vue                 # 主页面
│   ├── components/             # ui组件
│   │   └── ...
│   └── assets/                 # 静态资源
│       └── ...
├── static/                     # 纯静态资源（直接复制）
├── test/
│   └── unit/                   # 单元测试
│   │   ├── specs/              # 测试规格文件
│   │   ├── eslintrc            # 用于eslint的配置文件，仅用于单元测试的额外设置
│   │   ├── index.js            # 测试生成入口文件
│   │   ├── jest.conf.js        # 使用Jest进行单元测试时配置文件
│   │   ├── karma.conf.js       # 当使用Karma进行单元测试时，测试运行器配置文件
│   │   └── setup.js            # 在Jest运行你的单元测试之前运行的文件
│   └── e2e/                    # e2e测试
│   │   ├── specs/              # 测试规格文件
│   │   ├── custom-assertions/  # 自定义e2e测试
│   │   ├── runner.js           # 测试run脚本
│   │   └── nightwatch.conf.js  # 测试运行器配置文件
├── .babelrc                    # babel配置
├── .editorconfig               # 缩进，空格、制表符和编辑器的类似设置
├── .eslintrc.js                # eslint配置
├── .eslintignore               # eslint忽略规则
├── .gitignore                  # git忽略规则
├── .postcssrc.js               # postcss配置
├── index.html                  # index.html模板
├── package.json                # 构建脚本和依赖关系
└── README.md                   # 默认的README文件
```

### `build/`

This directory holds the actual configurations for both the development server and the production webpack build. Normally you don't need to touch these files unless you want to customize Webpack loaders, in which case you should probably look at `build/webpack.base.conf.js`.
这个目录包含webpack开发环境和生产环境的配置。通常你不需要接触这些文件，除非你想自定义WebPACK loader，在这种情况下，你应该看看`build/webpack.base.conf.js`.

### `config/index.js`

This is the main configuration file that exposes some of the most common configuration options for the build setup. See [API Proxying During Development](proxy.md) and [Integrating with Backend Framework](backend.md) for more details.
这是主要配置文件，它配置了打包的一些最常见的配置选项。详情请看[API Proxying During Development](proxy.md) 和[Integrating with Backend Framework](backend.md)

### `src/`

This is where most of your application code will live in. How to structure everything inside this directory is largely up to you; if you are using Vuex, you can consult the [recommendations for Vuex applications](http://vuex.vuejs.org/en/structure.html).
这是你应用的代码所在，如何在这个目录中构建所有内容在很大程度上取决于你自己，如果你使用Vuex，你可以看 [recommendations for Vuex applications](http://vuex.vuejs.org/en/structure.html).

### `static/`

This directory is an escape hatch for static assets that you do not want to process with Webpack. They will be directly copied into the same directory where webpack-built assets are generated.

See [Handling Static Assets](static.md) for more details.
这个目录是放你不想用Webpack处理的静态资源。当webpack打包的时候，他们会直接复制到相应的打包目录。
详情请看 [Handling Static Assets](static.md)

### `test/unit`

Contains unit test related files. See [Unit Testing](unit.md) for more details.
包含单元测试相关文件，详情请看[Unit Testing](unit.md)

### `test/e2e`

Contains e2e test related files. See [End-to-end Testing](e2e.md) for more details.
包含e2e测试相关文件，详情请看[End-to-end Testing](e2e.md)

### `index.html`

This is the **template** `index.html` for our single page application. During development and builds, Webpack will generate assets, and the URLs for those generated assets will be automatically injected into this template to render the final HTML.
这个文件是单页面应用的入口文件，在开发和打包的时候，webpack会把所有资源生成的链接注入到这个模板渲染最终的html.

### `package.json`

The NPM package meta file that contains all the build dependencies and [build commands](commands.md).
这个文件包含所有打包依赖的NPM包和[build commands](commands.md).
