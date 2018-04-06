import React, { Component } from 'react';
import ScreenReaderContent from '@instructure/ui-core/lib/components/ScreenReaderContent'
import Table from '@instructure/ui-core/lib/components/Table';

class ExercisesList extends Component {
  render() {
    const exercises = this.props.exercises;

    return (
      <div>
        <h1>Exercises</h1>
        <Table striped="rows" caption={<ScreenReaderContent>exercises</ScreenReaderContent>}>
          <thead>
            <tr>
              <th>Exercise Id</th>
              <th>Submissions</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map(this._renderExercise, this)}
          </tbody>
        </Table>
      </div>
    );
  }

  _renderExercise(exercise) {
    return (
      <tr key={exercise.id}>
        <td>{exercise.id}</td>
        <td>{`${exercise.submissions.length}/${exercise.memberships.length}`}</td>
      </tr>
    );
  }
}

export default ExercisesList;
