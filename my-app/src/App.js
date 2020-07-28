import React from 'react';
import Todo from './Todo.js'
import TodoList from "./TodoList.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <Router>
            <Switch>
              <Route path='/' exact={true} component={TodoList}/>
              <Route path='/todos' exact={true} component={TodoList}/>
              <Route path='/todos/:id' exact={true} component={Todo}/>
            </Switch>
    </Router>


  );
}

export default App;
