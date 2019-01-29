import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class ToDo extends React.Component {
    state = {
        newTodo: ''
    }

    // add key to each friend

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleAddTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
    }

    render () {
        return (
            <div>
                <h1>Todos</h1>
                <div>
                    {this.props.todos.map(todo => { return <p>{todo.task}</p>})}
                </div>
                <form onSubmit={this.handleAddTodo}>
                    <input 
                        onChange={this.changeHandler}
                        name='newTodo'
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    };
};


// might need to change this 
const mapStateToProps = state => {
    //console.log('mSTP', state);
    return {
      todos: state.todos
    };
  };
  
  export default connect(
    mapStateToProps,
    { addTodo} 
  )(ToDo); 
