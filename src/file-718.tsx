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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Users List</h1>
      <div className="bg-white shadow-md rounded-lg w-full max-w-md">
        <ul className="divide-y divide-gray-200">
          {users.map((user: { id: number; name: string }) => (
            <li key={user.id} className="flex justify-between items-center p-4">
              <span className="text-lg text-gray-800">{user.name}</span>
              <span className="text-sm text-gray-500">ID: {user.id}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
