import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import useToDoState from './useToDoState';

const App = () => {

    const {todos, addTodo, deleteTodo} = useToDoState([]);

    return (
        <div className = "App">
            <Typography component='h1' variant='h2' className="pageFont">
                Todo List
            </Typography>

            <ToDoForm saveToDo = {(todoText) => {
                const trimmedText = todoText.trim();

                if(trimmedText.length > 0){
                    addTodo(trimmedText);
                }
            }} />
            <ToDoList 
                todos = {todos}
                deleteTodo = {deleteTodo}
            />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
