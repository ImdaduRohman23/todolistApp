import React from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({input, setInput, todos, setTodos}) => {
    const handleAdd = (e) => {
        e.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        setInput('');
    };


    return (
        <form >
            <input 
                type="text" 
                placeholder='Enter a Todo . . .' 
                className='task-input'
                required
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button onClick={handleAdd} className='button-add' type='submit' >Add</button>
        </form>
    )
}

export default Form
