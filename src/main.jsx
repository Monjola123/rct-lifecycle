import React from 'react';
import ReactDOM from 'react-dom';
import UsersClass from './UsersClass';
import UsersFunction from './UserFunction';

ReactDOM.render(
  <React.StrictMode>
    <UsersClass />
    <UsersFunction/>
  </React.StrictMode>,
  document.getElementById('root')
);
