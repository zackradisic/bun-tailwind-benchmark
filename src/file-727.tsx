import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun + React + Tailwind</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <ul className="divide-y divide-gray-200">
          {users.length === 0 ? (
            <li className="py-3">Loading users...</li>
          ) : (
            users.map(user => (
              <li key={user.id} className="py-3 flex justify-between">
                <span className="text-lg">{user.name}</span>
                <span className="text-sm text-gray-600">{user.email}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
