import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import axios from 'axios';

var friendsList = {};
axios.get('http://localhost:3001/friends')
    .then(res => friendsList = res.data)
    .catch(err => console.log(err));

ReactDOM.render(<App friendsList={friendsList}/>, document.getElementById('root'));