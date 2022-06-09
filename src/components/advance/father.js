import React from "react";
import Child from "./child";
import "./father.css"
class Father extends React.Component {
    render() {
        return (
        <div className="fatherBox">父组件
            <Child infevent={(e)=> this.handleEvent(e)} content={'父传子的参数'}></Child>
        </div>
        )
    }
    handleEvent = (param) => {
        console.log('子传父，修改一下父的值', param);
    }
}

export default Father;