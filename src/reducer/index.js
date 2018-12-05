const initialState = {
    todos : []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADDNEWTODO":
    console.log(payload)
    const todos = state.todos.concat(payload)
    return {
        todos
     }

  default:
    return state
  }
}
