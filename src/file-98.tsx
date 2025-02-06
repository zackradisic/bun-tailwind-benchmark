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
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-2">Fetched Users:</h2>
        <ul className="list-disc list-inside">
          {users.map(user => (
            <li key={user.id} className="text-lg text-gray-700">{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
