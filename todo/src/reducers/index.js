import { TOGGLE_TODO, ADD_TODO, DELETE_TODO } from "../actions";

const initialState = {
    todos: [{task: 'Example Todo', completed: false}]
}; 


// might need to change names in case return statements 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_TODO): {
            return {
                ...state,
                todos: [...state.todos, {task: action.payload, completed: false}]};
        };

        case(TOGGLE_TODO): {
            return {
                ...state, 
                todos: state.todos.map((todo, id) => {
                    if (id === action.payload) return {...todo, completed: !todo.completed}
                    else {return todo;}
                })};
        };

        case(DELETE_TODO): {
            return {
                ...state, 
                todos: [...state.todos.filter(todo => todo !== action.payload)]
            };
        };

        default: return state;
    };
};

export default reducer; 
