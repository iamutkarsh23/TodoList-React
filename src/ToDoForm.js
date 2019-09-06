import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

import 'tachyons';

const ToDoForm = ({saveToDo}) => {
    
    const {value, onChange, reset} = useInputState('');

    return (
        <form onSubmit = {(event)=> {
            event.preventDefault();
            saveToDo(value);
            reset();
        }}>
            <div className = "pa3">
                <TextField 
                    variant = 'outlined' 
                    placeholder = 'Add your tasks here' 
                    margin = 'normal'
                    onChange = {onChange}
                    value = {value}
                />
                  <button 
                    className="f6 link dim ml3 mt3 br2 pt1 ph3 pv2 mb2 bw0 dib white bg-blue" 
                    onChange = {onChange}
                    value = {value} 
                    >
                    Add
                </button>

            </div>
            
        </form>
    );
};

export default ToDoForm;