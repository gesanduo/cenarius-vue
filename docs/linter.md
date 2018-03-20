# Linter Configuration

This boilerplate uses [ESLint](https://eslint.org/) as the linter, and uses the [Standard](https://github.com/feross/standard/blob/master/RULES.md) preset with some small customizations.
该样板使用[ESLint]（https://eslint.org/）作为linter，并使用[]（https://github.com/feross/standard/blob/master/RULES.md）预设 小的定制。

## eslint-plugin-vue

We always add [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) as well, which comes with a whole bunch of helpful rules to write consistent Vue components - it can also lint templates!
 我们总是添加[eslint-plugin-vue]（https://github.com/vuejs/eslint-plugin-vue），它附带了大量有用的规则来编写一致的Vue组件 - 它也可以使用lint模板！

You can find an overview of all the available rules on [github](https://github.com/vuejs/eslint-plugin-vue#gear-configs). We chose to add the `essential` configs, but we recommend to switch to the bigger `strongly-recommended` or `recommended` rulesets once you are familiar with them.
您可以在[github]（https://github.com/vuejs/eslint-plugin-vue#gear-configs）上找到所有可用规则的概述。 我们选择添加“essential”配置，但我们建议您在熟悉这些配置后切换到较大的“strongly-recommended”或“recommended”规则集。

## Customizing

If you are not happy with the default linting rules, you have several options:
如果您对默认的删除规则不满意，您可以选择以下几种方式：

1. Overwrite individual rules in `.eslintrc.js`. For example, you can add the following rule to enforce semicolons instead of omitting them:
1. 覆盖`.eslintrc.js`中的单个规则。 例如，您可以添加以下规则以强制使用分号而不是省略分号：

  ``` js
  // .eslintrc.js
  "semi": [2, "always"]
  ```

2. Pick a different ESLint preset when generating the project, for example [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
2. 生成项目时选择不同的ESLint预设，例如[eslint-config-airbnb]（https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb）。

3. Pick "none" for ESLint preset when generating the project and define your own rules. See [ESLint documentation](https://eslint.org/docs/rules/) for more details.
3. 生成项目时选择“none”作为ESLint预设，并定义自己的规则。 有关更多详细信息，请参见[ESLint文档]（https://eslint.org/docs/rules/）。

## Fixing Linting Errors

You can run the following command to let eslint fix any errors it finds (if it can - not all errors are fixable like this):
您可以运行以下命令让eslint修复它找到的任何错误（如果可以的话 - 并非所有错误都可以像这样修复）：

```
npm run lint -- --fix
```

*(The `--` in the middle is necessary to ensure the `--fix` option is passed to `eslint`, not to `npm`. It can be omitted when using yarn)*
*（中间的`--`必须确保`--fix`选项传递给`eslint`，而不是`npm`，使用yarn时可以省略）*
