# React

## 特性

- 声明式设计
- 虚拟 DOM
- 灵活搭配插件
- JSX
- 组件复用
- 单向响应的数据流

## JSX

### 含义

- JSX 是一种 JavaScript 的语法扩展
- JSX 就是用来声明 React 当中的元素，React 使用 JSX 来描述用户界面

### 工作原理

JSX -> Babel 转译器会把 JSX 转换成一个名为 React.createElement()的方法调用 -> 生成的对象即（react 元素） -> ReactDOM.render() -> DOM 元素 -> 页面渲染


### 父子传参

子传父： 通过pros拿到父组件在使用子组件时定义的属性，并设置要传递的参数； 父组件中拿到在使用子组件时自定义属性对应的方法中的参数就是子传父的参数。

父传子： 直接在子组件定义属性即可；子组件直接通过props获取
