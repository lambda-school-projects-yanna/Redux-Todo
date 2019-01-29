import { TOGGLE_TODO, ADD_TODO } from "../actions";

const initialState = {
    todo: [{task: 'Clean', completed: false}]
};


// might need to change names in case return statements 
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case(ADD_TODO): {
            return {...state, todo: action.payload.todo}
        };
        case(TOGGLE_TODO): {
            return {...state, completed: action.payload.completed}
        };
        default: return state;
    };
};

export default reducer; 
