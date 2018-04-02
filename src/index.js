import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import theme from '@instructure/ui-themes/lib/canvas';

theme.use();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
