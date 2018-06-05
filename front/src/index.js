import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//connexion à la base de données
// const connection = require("./helpers/db.js");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
