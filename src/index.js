import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Admin from './admin';
import IRouter from './pages/route_demo/router3/IRouter';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Admin />, document.getElementById('root'));
ReactDOM.render(<IRouter />, document.getElementById('root'));
registerServiceWorker();
