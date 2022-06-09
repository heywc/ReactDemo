import React from "react";
import "./index.css";
class TodoList extends React.Component {
  myref= React.createRef();
  state = {
    list:[{
      name: 'ywc',
      id: 1
    },{
      name: 'yyy',
      id: 2
    }]
  }
  render() {
    return ( 
    <div className="todoListBox">
      <input ref={this.myref} />
      <button onClick={this.myAddClick}>增加todo</button>
      <ul>
        {
          this.state.list.map(item => 
          <li key={item.id}>
            {item.name}
            <button onClick= {()=> {this.myDeleteClick(item)}}>删除todo</button>
          </li>
          )
        }
      </ul>
    </div> 
    )
  }
  myAddClick = ()=>{
    let newlist = [...this.state.list, {
      name: this.myref.current.value,
      id: Math.random()
    }]
    this.setState({
      list: newlist
    })
  }
  myDeleteClick= (one)=>{
    console.log(one);
    let newlist = [...this.state.list];
    newlist = newlist.filter(item => item.id !== one.id)
    this.setState({
      list: newlist
    })
  }
}

export default TodoList;
