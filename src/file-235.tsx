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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <h1 className="text-4xl font-bold mb-4">User List</h1>
      <ul className="bg-white shadow-lg rounded-lg p-5 w-full max-w-md">
        {users.length === 0 ? (
          <li className="text-gray-500">Loading...</li>
        ) : (
          users.map((user) => (
            <li key={user.id} className="flex justify-between py-2 border-b last:border-b-0">
              <span className="text-lg font-medium">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
