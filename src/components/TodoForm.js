import React, { Component } from 'react';

class TodoForm extends Component {
    handleInput(e) {
        console.log(e.target.value,e.target.name);
    }
    render() {
        return (
            <div className="card">
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                        onChange={this.handleInput}
                    />                    
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="responsible"                        
                        className="form-control"
                        placeholder="Responsible"
                        onChange={this.handleInput}
                    />                    
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Description"
                        onChange={this.handleInput}
                    />                    
                </div>   
                <div className="form-group">
                    <input
                        type="text"
                        name="priority"
                        className="form-control"
                        placeholder="Priority"
                        onChange={this.handleInput}
                    />                    
                </div>              
            </div>    
        );
    }    
}

export default TodoForm;