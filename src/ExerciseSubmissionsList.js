import React, { Component } from 'react';
import ScreenReaderContent from '@instructure/ui-core/lib/components/ScreenReaderContent'
import Table from '@instructure/ui-core/lib/components/Table';

import { average } from './utils/MathUtils';

class ExerciseSubmissionsList extends Component {
  render() {
    const submissions = this.props.exercise.submissions;
    const scores = submissions.map(submission => submission.score);
    const averageScore = average(scores);

    return (
      <div className="App">
        <h1>Submissions from Active Users</h1>
        <strong>Average Score</strong>: {averageScore}
        <Table striped="rows" caption={<ScreenReaderContent>submissions</ScreenReaderContent>}>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map(this._renderSubmission, this)}
          </tbody>
        </Table>
      </div>
    );
  }

  _renderSubmission(submission) {
    return (
      <tr key={submission.id}>
        <td>{submission.user.id}</td>
        <td>{submission.score}</td>
      </tr>
    );
  }
}

export default ExerciseSubmissionsList;
