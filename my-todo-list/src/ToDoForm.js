import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    
    }
    return (
        <form onSubmit={handleSubmit}>
            <input style={{margin: '20px',padding: '10px',color: 'black',}} value={userInput} type="text" onChange={handleChange} placeholder="Enter ToDo..."/>
            <button style={{padding: '10px',color: 'blue',margin: '-19px'}}>Submit</button>
        </form>
    );
};

export default ToDoForm;