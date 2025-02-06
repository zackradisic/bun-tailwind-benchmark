import "./style.css";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the server
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="p-4 border-b border-gray-200">
              <p className="text-xl font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
