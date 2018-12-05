import React, { Component } from 'react'
import Todos from '../containers/TodoContainer.js'
import TodoInputContainer from '../containers/TodoInputContainer.js'
import TodoContainer from '../containers/TodoContainer.js'

export default class TodoList extends Component {

  render() {
    return (
      <div>
        <TodoInputContainer/>
        <TodoContainer/>
      </div>
    )
  }
}

