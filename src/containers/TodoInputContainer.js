
import { connect } from "react-redux";
import TodoInput from '../components/TodoInput.js'

const mapDispatchToPros = (dispatch) => ({
    addNewToDo : newTodo =>{
        const newTodoItem ={
            content : newTodo,
            status : "active"
        }
        fetch("http://localhost:8080/api/todos", {method: 'POST', headers: new Headers({
            'Content-Type': 'application/json'}), 
            mode: 'cors', 
            body: JSON.stringify(newTodoItem)})
            .then(res => res.json())
            .then(({id, status, content})=>{
                dispatch({
                    type : "ADDNEWTODO",
                    payload : {id, status, content}
                })
  })
        
    }
})

export default connect(null, mapDispatchToPros)(TodoInput)