import "./style.css";
import React from "react";

const FastApp: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Users List
        </h1>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="flex items-center justify-between p-4 bg-gray-100 rounded hover:bg-gray-200">
              <span className="text-gray-700">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-center">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Refresh Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default FastApp;
