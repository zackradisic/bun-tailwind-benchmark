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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="p-4 bg-blue-50 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-700">Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
