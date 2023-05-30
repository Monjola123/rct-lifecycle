import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersFunction() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response.data); // Log the response to the console
        setUsers(response.data); // Update the state with the list of users
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of function Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersFunction;
