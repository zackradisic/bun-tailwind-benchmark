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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-md">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="p-4 border-b last:border-b-0 hover:bg-gray-50">
              <h2 className="text-xl text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-gray-500">Loading users...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
