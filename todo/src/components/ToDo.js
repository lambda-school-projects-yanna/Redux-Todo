import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggle } from '../actions';

class ToDo extends React.Component {
    state = {
        newTodo: ''
    }

    handleToggle = (id) => {
     this.props.toggle(id);
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleAddTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo: ''});
    }

    render () {
        return (
            <div>
                <h1>Todos</h1>
                <div>
                    {this.props.todos.map((todo, id) => { return <p onClick={() => this.handleToggle(id)}>{todo.task}</p>})}
                </div>
                <form onSubmit={this.handleAddTodo}>
                    <input 
                        onChange={this.changeHandler}
                        name='newTodo'
                        value={this.state.newTodo}
                        autoComplete='off'
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    };
};


const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };
  
  export default connect(
    mapStateToProps,
    { addTodo, toggle} 
  )(ToDo); 
