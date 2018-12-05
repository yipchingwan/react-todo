import React, { Component } from 'react'
import { connect } from "react-redux";

class TodoInput extends Component {
  
  addNewToDo = newTodo =>{
    this.props.dispatch({
      type : "ADDNEWTODO",
      payload : newTodo
    })
  }
  onAdd = () => {
    const {input} = this.refs
    this.addNewToDo(input.value)
    input.value = ''
  }
  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.onAdd}>add</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
}); 

connect(mapStateToProps)(TodoInput)
export default connect(mapStateToProps)(TodoInput);
