import "./style.css";
import React from 'react';

const FastApp: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to FastApp!</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User List</h2>
        <ul className="space-y-2">
          {users.length > 0 ? (
            users.map(user => (
              <li key={user.id} className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-lg font-medium">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No users found.</li>
          )}
        </ul>
      </div>

      <footer className="mt-8">
        <p className="text-sm text-gray-500">Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
}

export default FastApp;
