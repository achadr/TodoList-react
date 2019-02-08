import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {

  render() {
    
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id}  
        todo={todo} 
        markComplete={this.props.markComplete}
        delTodo= {this.props.delTodo} 
        /> // markComplete and delTodo from TodoItem.js component
    )) // map function boucle une list
  }
}

Todos.propTypes = {
  todos : PropTypes.array.isRequired
}

export default Todos;
// Markcomplete here will call markComplete from App.js because we don't have state here