import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Users List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-md">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="border-b last:border-b-0 p-4 hover:bg-gray-50">
              <h2 className="font-semibold text-lg">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </li>
          ))
        ) : (
          <p className="p-4 text-center text-gray-700">Loading users...</p>
        )}
      </ul>
    </div>
  );
};

export default App;
