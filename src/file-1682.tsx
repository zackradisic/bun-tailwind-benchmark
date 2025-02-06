import "./style.css";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-bold text-white mb-6">User List</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Fetched Users</h2>
        <ul className="space-y-2">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <span className="font-medium">{user.name}</span> - {user.email}
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">Loading...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
