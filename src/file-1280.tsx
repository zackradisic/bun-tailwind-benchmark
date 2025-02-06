import "./style.css";
import React from 'react';

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Users List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-md">
        {users.map((user) => (
          <li key={user.id} className="border-b p-4 hover:bg-gray-50">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
