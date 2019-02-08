import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor : "#73CAE8",
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.complete ? // if completed
             'line-through' : /*else*/ 'none'
        }
    }
 
  render() {
      const {id,title } = this.props.todo// we are using this to easy access to id and title, and not using each time this.props.todo.*
    return (
      <div style={this.getStyle()} >
        <p> 
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '} 
        { title} 
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} >X</button>
        </p>
      </div>
    )
  }
}
// PropTypes
TodoItem.propTypes = {
    todoItem : PropTypes.object.isRequired
  }

//Style button
const btnStyle ={
    backgroundColor : '#F50846',
    color: "#fff",
    border: "none",
    padding: '4px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float :'right',
}

export default TodoItem
// markComplete here will call the markComplete prop from Todos.js because state is on app.js
// bind ??