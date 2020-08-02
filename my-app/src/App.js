import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Todo from './components/Todo.js'
import TodoList from "./components/TodoList.js"
import LandingPage from "./LandingPage.js"

function App() {
  return (

    <Router>
            <Switch>
              <Route path='/' exact={true} component={LandingPage}/>
              <Route path='/todos' exact={true} component={TodoList}/>
              <Route path='/todos/:id' exact={true} component={Todo}/>
            </Switch>
    </Router>


  );
}

export default App;
