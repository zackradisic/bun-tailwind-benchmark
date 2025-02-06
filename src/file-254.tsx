import "./style.css";
import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          User List
        </h1>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="bg-gray-200 p-4 rounded-lg shadow">
              <h2 className="font-semibold text-lg">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Refresh Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
