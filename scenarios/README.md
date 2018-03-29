## What is this folder?

This folder contains test scenarios for the automated tests of the template on CircleCI.
此文件夹包含CircleCI上模板的自动测试的测试场景。

Each `.json`file contains an object that represents a set of answers to the questions that vue-cli asks the user when installing the template.
每个`.json`文件都包含一个对象，它代表了vue-cli在安装模板时询问用户的一组问题的答案。

With the code from `index.js`, we insert those answers into the metalsmith metadata and skip the inquirer questions, thus allowing us to run different test scenarios in CI without having to actually provide any answers to inquirer or to mock it.
使用`index.js`中的代码，我们将这些答案插入metalsmith元数据中，并跳过查询问题，从而使我们能够在CI中运行不同的测试场景，而无需实际提供任何查询者的答案或嘲笑它。

## The scenarios

We currently have 3 scenarios set up:
我们目前有3个场景设置：

1. 'minimal': it basically answers "no" to ever choice, so no router, no eslint, no tests
2. 'full': It answers "yes" to every choice. With router, with linting (standard), with full tests (jest & e2e)
3. 'full-airbnb-karma': like 'full', but using airbnb eslint config instead of standard and karma instead of jest for unit tests.
1. 'minimal'：它基本上回答“不”，以至于没有选择，它没有路由器，没有eslint，没有测试
2. “full”：它对每个选择都回答“是”。带路由器，带standard，全面测试（jest＆e2e）
3. 'full-airbnb-karma'：像'full'一样，但是使用airbnb eslint config而不是jest＆e2e来代替单元测试。

Other permutations might be worth testing to secure against edge cases, but this gives us a decent level of security over common combinations.
其他排列可能值得测试以确保不会出现边缘情况，但这使我们在普通组合方面获得了相当程度的安全性。

## How to use it?

Choosing a scenario is done through setting an ENV variable named `VUE_TEMPL_TEST`.
通过设置名为`VUE_TEMPL_TEST`的ENV变量来选择场景。

You can run a scenario yourself by running this in your terminal:
您可以通过在终端中运行此脚本来运行场景：

````
VUE_TEMPL_TEST=minimal vue init webpack your-directory
VUE_TEMPL_TEST=最小vue init webpack你的目录
```
