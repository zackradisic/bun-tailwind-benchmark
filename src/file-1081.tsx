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
      <h1 className="text-4xl font-bold mb-5">User List</h1>
      <ul className="w-full max-w-xl bg-white rounded-lg shadow-md p-5">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="border-b last:border-b-0 py-3 flex justify-between items-center">
              <span className="text-lg">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))
        ) : (
          <li className="py-3 text-gray-500">Loading users...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
