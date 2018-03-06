'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
{{#if_eq ui_demo "vux"}}
const vuxLoader = require('vux-loader')
{{/if_eq}}
const webpack = require('webpack')

const glob = require('glob')
const fs = require('fs')
const _ = require('lodash')
const hash = require('hash-sum')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

{{#lint}}const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
}){{/lint}}

let entries = utils.getEntry('./src/modules/*/*.js'); // 获得入口js文件

let webpackConfig = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: utils.isProduction() ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
    alias: {
      {{#if_eq build "standalone"}}
      'vue$': 'vue/dist/vue.esm.js',
      {{/if_eq}}
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {{#lint}}
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {{/lint}}
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  {{#auto_router}}
  // TODO: 应该写一个通用的自动生成路由的插件
  {{/auto_router}}
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

{{#if_eq ui_demo "vux"}}
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: [{
    name: 'vux-ui'
  }, {
    name: 'progress-bar'
  }, {
    name: 'duplicate-style',
  }, {
    name: 'js-parser',
    test: /src[\/\\]modules[\/\\]\w+[\/\\]router[\/\\]index\.js/,
    fn: function (source) {
      const srcDir = this.resourcePath.replace(/[\/\\]router[\/\\]index.js/, "")
      const files = {}
      glob.sync('pages/**/*.{vue,js}', {
        cwd: srcDir
      }).forEach(f => {
        const key = f.replace(/\.(js|vue)$/, '')
        if (/\.vue$/.test(f) || !files[key]) {
          files[key] = f
        }
      })

      let routes = utils.createRoutes(Object.values(files), srcDir)
      // 读取路由模板
      const route_template = fs.readFileSync('build/template/router.js', 'utf-8')
      const template = _.template(route_template + '\n' + source)
      return template({
        'routes': routes,
        'uniqBy': _.uniqBy,
        'hash': hash
      })
    }
  }]
})
{{else}}
module.exports = webpackConfig
{{/if_eq}}
