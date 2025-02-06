import "./style.css";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the API on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-bold mb-4">User List</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <ul className="space-y-4">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="p-4 border border-gray-200 rounded">
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-600">Loading users...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
