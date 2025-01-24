import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2">Fetched Users</h2>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-2 bg-blue-50 rounded-md hover:bg-blue-100 transition">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
