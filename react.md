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
