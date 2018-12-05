
import { connect } from "react-redux";
import TodoInput from '../components/TodoInput.js'

const mapDispatchToPros = (dispatch) => ({
    addNewToDo : newTodo =>{
        dispatch({
          type : "ADDNEWTODO",
          payload : newTodo
        })
    }
})

export default connect(null, mapDispatchToPros)(TodoInput)