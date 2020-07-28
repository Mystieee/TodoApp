import React, { Component } from 'react';
import ActivityService from "./service/ActivityService.js"

class TodoList extends Component{

constructor(props) {
           super(props)
           this.state = {
                       activities: []
                   }
           this.refreshActivityText = this.refreshActivityText.bind(this)
    };
componentDidMount() {
        this.refreshActivityText();
}
refreshActivityText() {
        ActivityService.retrieveAllActivities()
            .then(
                response => {
                    console.log(response);
                     this.setState({ activities: response.data })
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
                            <th>Building</th>
                            <th>Person</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.activities.map(
                                activity =>
                                    <tr key={activity.id}>
                                        <td>{activity.id}</td>
                                        <td>{activity.activity_text}</td>
                                        <td>{activity.building  === null ? '' : activity.building.name}</td>
                                        <td>{activity.person  === null ? '' : activity.person.name}</td>
                                        <td> Delete</td>

                                    </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
}
}

export default TodoList;