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
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800">User List</h1>
      <div className="mt-4 w-3/4 bg-white shadow-lg rounded-lg">
        <ul className="divide-y divide-gray-300">
          {users.map((user) => (
            <li key={user.id} className="px-4 py-2 hover:bg-gray-100">
              <h2 className="text-xl text-blue-600">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
