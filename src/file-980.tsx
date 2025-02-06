import "./style.css";
import React from "react";

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id} className="py-2 flex justify-between">
              <span className="font-medium text-gray-700">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Refresh Users
        </button>
      </div>
    </div>
  );
};

export default App;
