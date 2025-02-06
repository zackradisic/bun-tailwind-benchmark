import "./style.css";
import { useEffect, useState } from "react";

const MyFullstackApp = () => {
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id} className="py-4 flex items-center justify-between">
              <span className="text-lg text-gray-800">{user.name}</span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
      <footer className="mt-8 text-sm text-gray-500">
        <p>Powered by Bun & React</p>
      </footer>
    </div>
  );
};

export default MyFullstackApp;
