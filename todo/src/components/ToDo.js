import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';

const ToDo = (props) => {

    // create changehandlers

    return (
        <div>
            <h1>Todos</h1>
            <div>
                {props.todos.map(todo => {return todo.task})}
            </div>
            <form>
                <input/>
                <button>Add Todo</button>
            </form>
        </div>
    );
};

// might need to change this 
const mapStateToProps = state => {
    console.log('mSTP', state);
    return {
      toDosOnProps: state.todos
    };
  };
  
  export default connect(
    mapStateToProps,
    { addTodo, toggleTodo } 
  )(ToDo); 
