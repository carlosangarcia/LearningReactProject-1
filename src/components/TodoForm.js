import React, { Component } from 'react';

class TodoForm extends Component {
    render() {
        return (
            <div className="card">
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                    />                    
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="responsible"
                        className="form-control"
                        placeholder="Responsible"
                    />                    
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Description"
                    />                    
                </div>   
                <div className="form-group">
                    <input
                        type="text"
                        name="priority"
                        className="form-control"
                        placeholder="Priority"
                    />                    
                </div>              
            </div>    
        );
    }    
}

export default TodoForm;