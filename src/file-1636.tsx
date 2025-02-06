import "./style.css";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">User List</h1>
        <ul className="space-y-4">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-md shadow-sm">
                <span className="text-lg text-gray-700">{user.name}</span>
                <span className="text-sm text-gray-500">{user.email}</span>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No users found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
