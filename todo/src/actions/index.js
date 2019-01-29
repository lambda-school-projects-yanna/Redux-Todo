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

/*
// pretty sure I'll need to fix naming discrepancies in here and reducers/hs
export const toggleTodo = (completed) => {
    return {
        type: TOGGLE_TODO,
        payload: completed // this may be wrong
    }
}

*/
