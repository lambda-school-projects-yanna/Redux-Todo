// Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action creator
export const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: newTodo
    };
};

export const toggle = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id 
    }
}

