import React from 'react';

class UsersClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data }, () => {
          console.log(this.state.users); // Log the updated state to the console
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div>
        <h1>List of Users</h1>
        {this.state.users.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UsersClass;
