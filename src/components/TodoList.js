import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todos from './Todos'

export default class TodoList extends Component {

  render() {
    return (
      <div>
        <TodoInput/>
        <Todos/>
      </div>
    )
  }
}

