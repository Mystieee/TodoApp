import React, {Component} from 'react';
import BuildingService from "../service/BuildingService.js"
import PersonService from "../service/PersonService.js"
import ActivityService from "../service/ActivityService.js"
import AppNavbar from "../AppNavbar.js"
import { Formik, Field, Form} from "formik";
import {fieldset} from 'react-fieldset';


class Todo extends Component {

constructor(props) {
           super(props)
           this.state = {
                       id: this.props.match.params.id,
                       activity_text: '',
                       building: [],
                       person:[],
                       buildings: [],
                       persons: []
                   }
           this.selectBuildings = this.selectBuildings.bind(this)
           this.selectPersons = this.selectPersons.bind(this)
           this.onSaveButtonSubmit = this.onSaveButtonSubmit.bind(this)
    };
componentDidMount() {

        this.selectBuildings();
        this.selectPersons();

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        ActivityService.retrieveTodoById(this.state.id)
            .then(response => this.setState({
                activity_text: response.data.activity_text,
                building: response.data.building  === null ? ' ' : response.data.building,
                person: response.data.person  === null ? ' ' : response.data.person


            }))
}
selectBuildings() {
        BuildingService.retrieveAllBuildings()
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
onSaveButtonSubmit(values) {
        console.log("insdie submit");
        let formActivityData = {
                id: this.state.id,
                activity_text: values.activity_text,
                building: Array.from(this.state.buildings.filter(x => x.name== values.building.name))[0],
                person: Array.from(this.state.persons.filter(x => x.name== values.person.name))[0]
            }

            if (this.state.id == -1) {
                console.log("--inside add--", formActivityData);
                ActivityService.createActivity(formActivityData)
                    .then(() => this.props.history.push('/todos'))
            }
            else {

                ActivityService.updateActivity(this.state.id, formActivityData)
                    .then(
                         (response) => {
                                                            console.log("Response ->",response);
                                                            this.props.history.push('/todos')
                                        }
                    ).catch((error) => {
                        if(error.response){
                            console.log("error -->",error.response);
                        }
                    });
            }
}

render(){

    let { activity_text, id , person, building} = this.state
     return (
        <div>
             <AppNavbar />
             <div className="container">
             <h3>Todos</h3>
                 <Formik
                    enableReinitialize
                    initialValues= { this.state }
                    onSubmit={this.onSaveButtonSubmit}
                 >
                     {
                         (props) => (
                             <Form>
                                 <fieldset className="form-group">
                                     <label>Id </label>
                                     <Field className="form-control" type="text" name="id" disabled />
                                 </fieldset>

                                 <fieldset className="form-group">
                                     <label>Description    </label>
                                     <Field className="form-control" type="text" name='activity_text' />
                                 </fieldset>

                                  <fieldset className="form-group">
                                      <label>Building    </label>

                                      <Field as="select" name='building.name' id='building.id'  className="form-control" >
                                                   <option key='0'> </option>
                                                    {
                                                         this.state.buildings.map(
                                                             bldg =>
                                                                 <option key={bldg.id}>{bldg.name}</option>
                                                         )
                                                    }
                                      </Field>

                                  </fieldset>

                                  <fieldset className="form-group">
                                      <label>Person    </label>
                                       <Field as="select" name='person.name' id='person.id' className="form-control">
                                                 <option key='0'> </option>
                                                  {
                                                        this.state.persons.map(
                                                            prsn =>
                                                                 <option key={prsn.id}>{prsn.name} </option>
                                                       )
                                                  }
                                      </Field>

                                  </fieldset>
                                 <button className="btn btn-success" type="submit">Save</button>
                             </Form>
                         )
                     }
                 </Formik>
             </div>
        </div>

      );
}
}

export default Todo;
