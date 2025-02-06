import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    // Fetch users from the API
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Bun + React + TailwindCSS</h1>
      <p className="text-lg text-gray-700 mb-8">User List:</p>
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <ul className="space-y-4">
          {users.length === 0 ? (
            <li className="text-gray-500">Loading users...</li>
          ) : (
            users.map((user) => (
              <li key={user.id} className="border-b py-2">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">{user.name}</span>
                  <span className="text-sm text-gray-500">{user.email}</span>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
