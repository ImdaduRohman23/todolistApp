import React from 'react'

const TodoList = ({todos, setTodos}) => {
    const handleDelete = (id) => (
        setTodos(todos.filter(i => i.id !== id))
    )

    const handleComplete = (id) => {
        setTodos(todos.map(i => {
            if(i.id === id){
                return {...i , completed: !i.completed}
            } else return i
        }))
    }

    return (
        <div>
            {
                todos.map(i => (
                    <li className="list-item" key={i.id}>
                        <input 
                            type="text" 
                            value={i.title}
                            className={`list ${i.completed? 'complete': ""}`}
                            onChange={e => e.preventDefault()}
                        />
                        <div>
                            <button className="button-complete task-button" onClick={() => handleComplete(i.id)}>
                                <i className="fa fa-check-circle"></i>
                            </button>
                            <button className="button-edit task-button">
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="button-delete task-button" onClick={() => handleDelete(i.id)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </li>
                ))
            }
        </div>
    )
}

export default TodoList
