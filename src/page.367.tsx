import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Bun + React + TypeScript</h1>
      <p className="text-gray-700 mb-6">Fetching users from the server...</p>
      <ul className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id} className="border-b last:border-b-0 py-2">
            <span className="text-lg font-medium">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
