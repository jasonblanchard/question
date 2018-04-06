import React, { Component } from 'react';

import ExerciseSubmissionsList from './ExerciseSubmissionsList';
import apiService from './apiService';

export default class ExerciseSubmissionsPage extends Component {
  state = {
    exercise: undefined
  }

  componentDidMount() {
    apiService.getExercise()
      .then(exercise => {
        this.setState({ exercise });
      });
  }

  render() {
    if (!this.state.exercise) return <div>Loading...</div>;
    return (
      <ExerciseSubmissionsList exercise={this.state.exercise} />
    )
  }
}
