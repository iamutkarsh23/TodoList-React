import {useState} from 'react';

const useToDoState = (initialVal) => {
    const [todos, setTodos] = useState(initialVal);

    return {
        todos, 
        addTodo: (todoText) => {
            setTodos([...todos,todoText]);
        },
        deleteTodo: (taskIndex) => {
            const newList = todos.filter((_,index) => index !== taskIndex);
            setTodos(newList);
        }
    }
}

export default useToDoState;