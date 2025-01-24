import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">User List</h1>
      <ul className="bg-white shadow-md rounded-lg p-4 w-1/2 max-w-lg">
        {users.map((user) => (
          <li key={user.id} className="border-b border-gray-300 py-2">
            <p className="text-lg">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
      {users.length === 0 && <p className="text-gray-500 mt-4">No users found.</p>}
    </div>
  );
};

export default App;
