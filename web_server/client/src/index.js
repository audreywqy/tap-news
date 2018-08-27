import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import SignUpPage from './SignUp/SignUpPage';
import LoginPage from './Login/LoginPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignUpPage />, document.getElementById('root'));
registerServiceWorker();
