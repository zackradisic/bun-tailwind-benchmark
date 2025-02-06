import "./style.css";
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="border-b border-gray-300 py-2 text-lg text-gray-800">
              {user.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No users found.</li>
        )}
      </ul>
    </div>
  );
};

export default App;
