import React, { Component } from 'react'


export default class TodoInput extends Component {
  
  
  onAdd = () => {
    const {input} = this.refs
    this.props.addNewToDo(input.value)
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


