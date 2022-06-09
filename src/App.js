/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-05-25 16:19:52
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2022-06-09 15:28:11
 * @FilePath: /myself/mygithub/ReactDemo/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
// import Btn from "./components/btn";
// import Navbar from "./components/Navbar";
// import Footer from "./components/footer/index";
// import TodoList from "./components/todoList/index";
// import Father from "./components/advance/father";
import {Example, Example2} from "./components/testhook/useStateHook";
import {UseEffecExample} from "./components/testhook/useEffectHook";
class App extends React.Component {
  render() {
    return (
      <div>
        {/* ----------函数式组件和类继承式组件用法----------
        <Navbar></Navbar>
        <Btn></Btn>
        <Footer></Footer>
        ----------todo list-------------
        <TodoList></TodoList>
        ----------父子通信-------------
        <Father></Father> */}
        -----------测试Hook: useState -----------
        <Example></Example>
        <Example2></Example2>
        -----------测试Hook: useEffect -----------
        <UseEffecExample></UseEffecExample>
        
      </div>
    );
  }
}
export default App;
