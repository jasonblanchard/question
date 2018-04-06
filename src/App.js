import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from 'react';

import ExerciseSubmissionsPage from './ExerciseSubmissionsPage';
import ExercisesPage from './ExercisesPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ExerciseSubmissionsPage} />
          <Route exact path="/exercises" component={ExercisesPage} />
        </div>
      </Router>
    );
  }
}
