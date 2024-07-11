import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <h1>Welcome to AlgoLearn</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
