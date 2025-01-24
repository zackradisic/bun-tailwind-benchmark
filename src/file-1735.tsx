import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Fetched Users:</h2>
        <ul className="space-y-2">
          {users.map((user: { id: number; name: string }) => (
            <li key={user.id} className="bg-gray-200 p-4 rounded-md">
              <span className="font-medium">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
