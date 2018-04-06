import React, { Component } from 'react';

import ExercisesList from './ExercisesList';
import apiService from './apiService';

export default class ExercisesPage extends Component {
  state = {
    exercises: undefined
  }

  componentDidMount() {
    apiService.getExercises()
      .then(exercises => {
        this.setState({ exercises });
      });
  }

  render() {
    if (!this.state.exercises) return <div>Loading...</div>;
    return (
      <ExercisesList exercises={this.state.exercises} />
    )
  }
}
