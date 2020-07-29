import React, {Component} from 'react';
import BuildingService from "./service/BuildingService.js"
import PersonService from "./service/PersonService.js"
import ActivityService from "./service/ActivityService.js"
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import {fieldset} from 'react-fieldset';


class Todo extends Component {

constructor(props) {
           super(props)
           this.state = {
                       id: this.props.match.params.id,
                       activity_text: '',
                       building:'',
                       person:'',
                       buildings: [],
                       persons: []
                   }
           this.selectBuildings = this.selectBuildings.bind(this)
           this.selectPersons = this.selectPersons.bind(this)
           this.onSubmit = this.onSubmit.bind(this)
    };
componentDidMount() {

          console.log(this.state.id)
                // eslint-disable-next-line
                if (this.state.id == -1) {
                    return
                }
                ActivityService.retrieveTodoById(this.state.id)
                    .then(response => this.setState({
                        activity_text: response.data.activity_text,
                        building: response.data.building  === null ? ' ' : response.data.building.name,
                        person: response.data.person  === null ? ' ' : response.data.person.name


                    }))


        this.selectBuildings();
        this.selectPersons();
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
onSubmit(values) {
    console.log(values);
}
render(){

    let { activity_text, id , person, building} = this.state
     return (

             <div className="container">
             <h3>Todos</h3>
                 <Formik
                    enableReinitialize
                    initialValues= { this.state }
                    onSubmit={this.onSubmit}
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

                                      <Field as="select" name='building' className="form-control">
                                                   <option key='0'> </option>
                                                    {
                                                         this.state.buildings.map(
                                                             bldg =>
                                                                 <option key={bldg.id}>{bldg.name} </option>
                                                         )
                                                    }
                                      </Field>

                                  </fieldset>

                                  <fieldset className="form-group">
                                      <label>Person    </label>
                                       <Field as="select" name='person' className="form-control">
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

      );
}
}

export default Todo;
