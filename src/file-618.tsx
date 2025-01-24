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
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-5">
        <h2 className="text-2xl font-semibold mb-4">Users:</h2>
        <ul className="space-y-2">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="p-3 bg-blue-50 rounded">
                <span className="font-medium text-gray-800">{user.name}</span>
              </li>
            ))
          ) : (
            <li className="p-3 text-gray-500">Loading users...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
