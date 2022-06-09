import React from "react";
class Child extends React.Component {
    state = {
        param:{
            type:'未来的大牛',
            name:'ywc'
        }
    }
    render() {
        return (
            <div>
               <button onClick={()=>{ this.childClick()}}>子组件</button>
               <div>{this.props.content}</div>
            </div>
        ) 
    }
    childClick = ()=>{
        this.props.infevent(this.state.param)
    }
}

export default Child;