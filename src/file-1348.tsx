import "./style.css";
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">User List</h1>
      <ul className="bg-white shadow-md rounded-lg p-4 w-3/4">
        {users.length === 0 ? (
          <li className="text-gray-500">Loading users...</li>
        ) : (
          users.map(user => (
            <li key={user.id} className="border-b p-2 hover:bg-blue-100">
              <span className="text-gray-800 font-semibold">{user.name}</span> - {user.email}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
