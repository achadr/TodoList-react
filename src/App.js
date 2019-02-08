import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import  uuid from 'uuid';

class App extends Component {
  state = {
    todos : [
      {
        id : uuid.v4(),
        title: 'Interview next week',
        complete: false
      },
      {
        id : uuid.v4(),
        title: 'Phone call',
        complete: false
      },
      {
        id : uuid.v4(),
        title: 'Check mail',
        complete: false
      },
    ]
    }
    //Toggle complete
    markComplete = (id) => {
      this.setState ({
        todos: this.state.todos.map(todo=> {
          if (todo.id === id){
            todo.complete = !todo.complete;
          }
          return todo;
        })
      })
        }
   // Remove Item     
      delTodo = (id) => {
        this.setState({
          todos : [...this.state.todos.filter(
            todo => todo.id !== id
          )]
        })
      }
   // Add todo
   addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(), // uuid generates random id
      title: title,
      complete : false
    } 
    this.setState({
       todos: [...this.state.todos, newTodo]
     })
    }

  
  render() {
    return (
      <div className="App">
      <Header/>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} 
      markComplete={this.markComplete} 
      delTodo = {this.delTodo}
      />
      </div>
    );
  }
}

export default App;
