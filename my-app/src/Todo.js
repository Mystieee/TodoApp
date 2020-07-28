import React, {Component} from 'react';
import TodoList from "./TodoList.js"
import BuildingService from "./service/BuildingService.js"
import PersonService from "./service/PersonService.js"


class Todo extends Component {

constructor(props) {
           super(props)
           this.state = {
                       buildings: [],
                       persons: []
                   }
           this.selectBuildings = this.selectBuildings.bind(this)
           this.selectPersons = this.selectPersons.bind(this)
    };
componentDidMount() {
        this.selectBuildings();
        this.selectPersons();
}
selectBuildings() {
        BuildingService.retrieveAllBuildings()//HARDCODED
            .then(
                response => {
                    console.log(response);
                     this.setState({ buildings: response.data })
                }
            )
    }
selectPersons(){
        PersonService.retrieveAllPersons()
                    .then(
                        response => {
                            console.log(response);
                             this.setState({ persons: response.data })
                        }
                    )
}
render(){
     return (
        <div >
            <div className="container">
                 <h1> Todo App </h1>
                <form>
                    Activity: <input type="text" name="activity"/>
                    <br/>
                     Building:
                      <select>
                          {
                             this.state.buildings.map(
                                 bldg =>
                                     <option key={bldg.id}>{bldg.name} </option>
                             )
                          }
                      </select>

                     <br />
                    Person:

                    <select>
                          {
                             this.state.persons.map(
                                 prsn =>
                                     <option key={prsn.id}>{prsn.name} </option>
                             )
                          }
                    </select>

                    <br/>
                     <input type="submit" value="Add Todo" />
                </form>
            </div>
            <br />
            <TodoList />

        </div>
      );
}
}

export default Todo;
