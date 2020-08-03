import React, { Component} from 'react';
import ActivityService from "../service/ActivityService.js"
import AppNavbar from "../AppNavbar.js"

class TodoList extends Component{

    constructor(props) {
               super(props)
               this.state = {
                           activities: []
                       }
               this.refreshActivityText = this.refreshActivityText.bind(this)
               this.deleteActivityClicked = this.deleteActivityClicked.bind(this)
               this.updateActivityClicked = this.updateActivityClicked.bind(this)
               this.addActivityClicked = this.addActivityClicked.bind(this)
    };
    componentDidMount() {
            this.refreshActivityText();
    }
    refreshActivityText() {
        ActivityService.retrieveAllActivities()
            .then(
                response => {
                     this.setState({ activities: response.data })
                }
            )
    }

    deleteActivityClicked(id){

         ActivityService.deleteActivity(id)
            .then(
                response => {
                    this.refreshActivityText()
                }
            ).catch(error => {
                 console.log(error.response)
             });
    }

    updateActivityClicked(id){
          this.props.history.push(`/todos/${id}`)
    }

    addActivityClicked(){
            this.props.history.push(`/todos/-1`)
    }




render(){
return(
        <div>
        <AppNavbar /><br />
            <div className="container">
                <br />
                {this.state.activities.length > 0 ?
                <table className="table">
                    <thead>
                        <tr>
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
                                        <td>{activity.activity_text}</td>
                                        <td>{activity.building  === null ? '' : activity.building.name}</td>
                                        <td>{activity.person  === null ? '' : activity.person.name}</td>
                                        <td><button className="btn btn-outline-primary" onClick={() => this.updateActivityClicked(activity.id)}>Update</button>&nbsp;&nbsp;&nbsp;
                                            <button className ="btn btn-outline-danger" onClick={() => this.deleteActivityClicked(activity.id)} >Delete</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                : ''}
                <div className="row">
                    <button className="btn btn-success" onClick={this.addActivityClicked}>Add ToDo</button>
                </div>
                <hr/>
                 <span> {this.state.activities.length > 0 ? this.state.activities.length+" active task to do" : "No Active todos" }</span>
            </div>

        </div>
    );
}
}

export default TodoList;