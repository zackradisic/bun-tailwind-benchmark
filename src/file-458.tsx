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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">User List</h1>
      <div className="w-full max-w-md shadow-md rounded-lg overflow-hidden">
        <ul className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id} className="py-4 px-6 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-900">{user.name}</span>
                <span className="text-sm text-gray-500">{user.email}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
