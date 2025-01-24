import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">User List</h1>
      <div className="w-full max-w-md">
        <ul className="bg-white rounded-lg shadow-md">
          {users.length > 0 ? (
            users.map((user) => (
              <li
                key={user.id}
                className="flex items-center justify-between px-4 py-2 border-b border-gray-200 hover:bg-gray-100"
              >
                <span className="text-lg">{user.name}</span>
                <span className="text-gray-600">{user.email}</span>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">Loading users...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
