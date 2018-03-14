# Project Structure

``` bash
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── eslintrc            # config file for eslint with extra settings only for unit tests
│   │   ├── index.js            # test build entry file
│   │   ├── jest.conf.js        # Config file when using Jest for unit tests
│   │   ├── karma.conf.js       # test runner config file when using Karma for unit tests
│   │   └── setup.js            # file that runs before Jest runs your unit tests
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .editorconfig               # indentation, spaces/tabs and similar settings for your editor
├── .eslintrc.js                # eslint config
├── .eslintignore               # eslint ignore rules
├── .gitignore                  # sensible defaults for gitignore
├── .postcssrc.js               # postcss config
├── index.html                  # index.html template
├── package.json                # build scripts and dependencies
└── README.md                   # Default README file
```

### `build/`

This directory holds the actual configurations for both the development server and the production webpack build. Normally you don't need to touch these files unless you want to customize Webpack loaders, in which case you should probably look at `build/webpack.base.conf.js`.
这个目录包含webpack开发环境和生产环境的配置。通常你不需要接触这些文件，除非你想自定义WebPACK loader，在这种情况下，你应该看看`build/webpack.base.conf.js`.

### `config/index.js`

This is the main configuration file that exposes some of the most common configuration options for the build setup. See [API Proxying During Development](proxy.md) and [Integrating with Backend Framework](backend.md) for more details.
这是主要配置文件，它配置了打包的一些最常见的配置选项。更多详情看[API Proxying During Development](proxy.md) and [Integrating with Backend Framework](backend.md)

### `src/`

This is where most of your application code will live in. How to structure everything inside this directory is largely up to you; if you are using Vuex, you can consult the [recommendations for Vuex applications](http://vuex.vuejs.org/en/structure.html).
这是你应用的代码所在，如何在这个目录中构建所有内容在很大程度上取决于你自己，如果你使用Vuex，你可以看 [recommendations for Vuex applications](http://vuex.vuejs.org/en/structure.html).

### `static/`

This directory is an escape hatch for static assets that you do not want to process with Webpack. They will be directly copied into the same directory where webpack-built assets are generated.

See [Handling Static Assets](static.md) for more details.
这个目录是放你不想用Webpack处理放静态资源。当webpack打包的时候，他们会直接复制到相应的打包目录。
更多详情看 [Handling Static Assets](static.md)

### `test/unit`

Contains unit test related files. See [Unit Testing](unit.md) for more details.
包含单元测试相关文件，更多详情看[Unit Testing](unit.md)

### `test/e2e`

Contains e2e test related files. See [End-to-end Testing](e2e.md) for more details.
包含e2e测试相关文件，更多详情看[End-to-end Testing](e2e.md)

### `index.html`

This is the **template** `index.html` for our single page application. During development and builds, Webpack will generate assets, and the URLs for those generated assets will be automatically injected into this template to render the final HTML.
这个文件是单页面应用的入口文件，在开发和打包的时候，webpack会把所有资源生成的链接注入到这个模板渲染最终的html.

### `package.json`

The NPM package meta file that contains all the build dependencies and [build commands](commands.md).
这个文件包含所有打包依赖的NPM包和[build commands](commands.md).
