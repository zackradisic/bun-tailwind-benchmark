import React from 'react';

const App: React.FC = () => {
  // Fetch a list of users from the server
  const [users, setUsers] = React.useState<Array<{ id: number; name: string }>>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-4">User List</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <ul className="space-y-2">
          {users.length > 0 ? (
            users.map(user => (
              <li key={user.id} className="p-4 border border-gray-300 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              </li>
            ))
          ) : (
            <li className="text-gray-500">Loading...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
