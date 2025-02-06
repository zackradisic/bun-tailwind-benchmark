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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">User List</h1>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between p-4 border-b border-gray-300 hover:bg-gray-50">
            <span className="text-lg">{user.name}</span>
            <span className="text-sm text-gray-600">{user.email}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-gray-500">Powered by Bun</p>
    </div>
  );
};

export default App;
