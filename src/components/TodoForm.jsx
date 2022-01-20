import { useState } from "react"
import uuid from "uuid"

function TodoForm() {

    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    });

    const handleTaskInputChange = (e) => {
        setTodo({...todo, task: e.target.value})
    }

    const handleSubmit = () =>{
        e.preventDefault()
        if(todo.task.trim()){
            addTodo({...todo, id: uuid.v4() })
            //reset task input
            setTodo({...todo, task: ""})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}/>
            <button/>
        </form>
    )
}
export default TodoForm