import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="bg-white rounded shadow-lg p-6">
        {users.length === 0 ? (
          <li className="text-gray-500">Loading users...</li>
        ) : (
          users.map((user) => (
            <li key={user.id} className="py-2 border-b border-gray-200">
              <span className="text-lg text-gray-800">{user.name}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
