import "./style.css";
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">User List</h1>
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-semibold mb-4">All Users</h2>
        <ul className="list-disc pl-5">
          {users.map((user) => (
            <li key={user.id} className="text-lg text-gray-800">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
