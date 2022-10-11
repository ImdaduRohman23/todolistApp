import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map(i => (
            i.id === id ? {title, id, completed} : i
        ));
        setTodos(newTodo);
        setEditTodo('');
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput('');
        }
    }, [setInput, editTodo]);
    
    const handleAdd = (e) => {
        e.preventDefault();
        if(!editTodo) {
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput('');    
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };


    return (
        <form >
            <input 
                type="text" 
                placeholder='Enter a todo . . .' 
                className='task-input'
                required
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button onClick={handleAdd} className='button-add' type='submit' >
                {
                    editTodo? 'OK' : 'Add'
                }
            </button>
        </form>
    )
}

export default Form
