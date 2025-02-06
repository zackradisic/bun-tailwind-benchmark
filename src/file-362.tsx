import "./style.css";
import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-5 text-blue-600">Bun + Tailwind + React</h1>
      <p className="mb-8 text-lg text-gray-700">Fetch users from the server!</p>
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        {users.length > 0 ? (
          <ul className="list-disc list-inside">
            {users.map((user) => (
              <li key={user.id} className="text-gray-800">{user.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default App;
