import React, { Component } from 'react';
import BuildingService from "./service/BuildingService.js"

class TodoList extends Component{

constructor(props) {
           super(props)
           this.state = {
                       todos: []
                   }
           this.refreshTodos = this.refreshTodos.bind(this)
    };
componentDidMount() {
        this.refreshTodos();
}
refreshTodos() {
        BuildingService.retrieveAllBuildings()//HARDCODED
            .then(
                response => {
                    console.log(response);
                     this.setState({ todos: response.data })
                }
            )
    }

render(){
    return(
        <div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.name}</td>
                                    </tr>
                            )
                        }



                        <tr>
                            <td>1</td>
                            <td>Todo Task #1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
}

export default TodoList;