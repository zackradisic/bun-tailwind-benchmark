import "./style.css";
import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">User List</h1>
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>
        <ul className="space-y-2">
          {users.map((user: { id: number; name: string }) => (
            <li key={user.id} className="text-gray-700 border-b py-2">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
