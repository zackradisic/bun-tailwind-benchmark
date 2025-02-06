import "./style.css";
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-semibold text-blue-600">User List</h1>
      <ul className="mt-4 w-full max-w-md bg-white rounded-lg shadow-md">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="border-b p-4">
              <h2 className="text-xl font-medium">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-gray-500">No users found.</li>
        )}
      </ul>
    </div>
  );
};

export default App;
