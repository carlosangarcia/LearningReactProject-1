import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';

import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
        todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
        todos: [...this.state.todos,todo]
    })
  }

  removeTodo(index){
    console.log(index);
    this.setState({
        todos: this.state.todos.filter((e,i) => {
            return i !== index
        })
    });
  }

  render() {
    
    const todos = this.state.todos.map((todo,i) => {
        return(
            <div className="col-md-4">
                <div className="card mt-4">                
                    <div className="card-title text-center">
                        <h3>{todo.title}</h3>
                        <span className="badge badge-pill badge-danger ml-2">
                            {todo.priority}
                        </span>  
                    </div>
                    <div className="card-body">
                        <p>{todo.description}</p>
                        <p><mark>{todo.responsible}</mark></p>
                    </div> 
                    <div className="card-footer">                
                        <button
                            className="btn btn-danger"
                            onClick={this.removeTodo.bind(this,i)}
                        >
                        Borrar
                        </button>
                    </div>
                </div>
            </div>
        )
    })
    return (
      <div className="App">    
      <Navigation></Navigation>   
        <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
                Tasks
                <span className="badge badge-pill badge-light ml-2">
                    { this.state.todos.length }
                </span>
            </a>
        </nav>        
        <div className="container">
            <div className="row mt-4">
                { todos }
            </div>
        </div>

        

        <header className="App-header">        
          {/*<img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>          
          */}
          <TodoForm onAddTodo={this.handleAddTodo}/>
        </header>

      </div>
    );
  }
}

export default App;
