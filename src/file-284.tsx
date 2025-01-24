import { useEffect, useState } from "react";

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <ul className="space-y-4">
          {users.length > 0 ? (
            users.map(user => (
              <li key={user.id} className="flex items-center justify-between p-4 border-b border-gray-200">
                <span className="text-lg text-gray-800">{user.name}</span>
                <span className="text-gray-500">{user.email}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500 text-center">Loading users...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
