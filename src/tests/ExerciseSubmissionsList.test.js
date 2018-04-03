import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import ExerciseSubmissionsList from '../ExerciseSubmissionsList';

const exercise = {
  memberships: [
    {
      id: 1,
      status: 'ACTIVE',
      user: {
        id: 1
      }
    },
    {
      id: 2,
      status: 'ACTIVE',
      user: {
        id: 2
      }
    },
    {
      id: 3,
      status: 'INACTIVE',
      user: {
        id: 3
      }
    }
  ],
  submissions: [
    {
      id: 1,
      score: 100,
      user: {
        id: 1
      }
    },
    {
      id: 2,
      score: 80,
      user: {
        id: 2
      }
    },
    {
      id: 3,
      score: 70,
      user: {
        id: 3
      }
    }
  ]
};

it('renders with an Exercise', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<ExerciseSubmissionsList exercise={exercise} />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
