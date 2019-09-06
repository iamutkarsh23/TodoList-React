import {useState} from 'react';

const useInputState = (initialVal) => {
    const [value, setValue] = useState(initialVal);

    return {
        value,
        onChange: (event) => {
            setValue(event.target.value);
        },
        reset: () => setValue('')
    };
};

export default useInputState;