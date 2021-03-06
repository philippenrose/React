import React, { Component } from 'react'
import { toUnicode } from 'punycode';
import TodoList from './TodoList';

class Todo extends Component {
  state = {
    items:['milk', 'butter', 'cheese'],
    item:'',
    map:{},
  }

  strike = (index) =>{
      let tempMap = {...this.state.map};
      tempMap[index] = !tempMap[index];
      this.setState(
        {
          map:tempMap
        }
      )
  }
isStrike=(index) =>{
    return this.state.map[index];
}

  remove = (index) =>{
    let newItems = [...this.state.items];
    newItems.splice(index,1);

    this.setState(
      {
        items:newItems
      }
    )
    
  }
  add = () =>{
      let newItems = [...this.state.items];
      newItems.push(this.state.item);
      this.setState(
        {
          items:newItems,
          item:""
        }
      )
  }
  handleChange = (event) => {
      this.setState(
        {
        item:event.target.value
        }
      )
     console.log("letters: "+this.state.item);
  }
  keyUp = (event) => {
    if (event.keyCode ===13) {
      this.add(event);
    }
  }
  render() {
    return (
      <div>
          <h1> To-Do List</h1>
        <input onKeyUp={this.keyUp} onChange={this.handleChange} value={this.state.item} name="item" type ="text" />
        <button onClick={this.add}>add</button>
        <TodoList 
        isStrike={this.isStrike}
        strike={this.strike}
        remove ={this.remove} 
        items={this.state.items} 
        />
      </div>
    );
  }
}
export default Todo;