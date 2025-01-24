import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Users List
        </h1>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="bg-blue-50 p-4 rounded-md shadow-sm">
              <p className="text-lg font-medium text-gray-800">{user.name}</p>
              <p className="text-gray-600">Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
