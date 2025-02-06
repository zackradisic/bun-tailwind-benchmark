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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Bun Fullstack App with Tailwind</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <ul className="space-y-2">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="p-4 bg-blue-50 rounded-md border-l-4 border-blue-400">
                {user.name} - {user.email}
              </li>
            ))
          ) : (
            <li className="text-gray-500">Loading users...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
