import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">User List</h1>
      <ul className="w-full max-w-md bg-white shadow-md rounded-lg">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="border-b p-4 hover:bg-gray-50">
              <h2 className="font-semibold text-lg">{user.name}</h2>
              <p className="text-gray-700">{user.email}</p>
            </li>
          ))
        ) : (
          <li className="p-4">Loading users...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
