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
      <h1 className="text-4xl font-bold text-blue-600 mb-6">User List</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users</h2>
        <ul className="space-y-2">
          {users.length === 0 ? (
            <li className="text-gray-500">Loading users...</li>
          ) : (
            users.map((user: { id: number; name: string }) => (
              <li key={user.id} className="p-2 bg-gray-200 rounded">
                {user.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
