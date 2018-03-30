import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import theme from '@instructure/ui-themes/lib/canvas';

theme.use();

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
}

ReactDOM.render(<App exercise={exercise} />, document.getElementById('root'));
registerServiceWorker();
