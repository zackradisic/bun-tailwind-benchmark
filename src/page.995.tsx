import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-2">
          {users.map(user => (
            <li key={user.id} className="border-b border-gray-200 py-2">
              <span className="font-semibold text-gray-800">{user.name}</span>
              <span className="text-gray-600"> - {user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
