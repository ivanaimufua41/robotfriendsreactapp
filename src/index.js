import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Card />, document.getElementById('root'));
registerServiceWorker();
