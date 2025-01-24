import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<{ id: number; name: string }[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">User List</h1>
      <div className="flex flex-col items-center">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">User ID: {user.id}</p>
          </div>
        ))}
        {users.length === 0 && (
          <div className="text-gray-500">No users found.</div>
        )}
      </div>
    </div>
  );
};

export default App;
