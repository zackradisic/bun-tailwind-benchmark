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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">User List</h1>
      <div className="bg-white shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 p-4">Users</h2>
        <ul className="divide-y divide-gray-200">
          {users.map(user => (
            <li key={user.id} className="p-4 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-medium text-gray-700">{user.name}</h3>
              <p className="text-gray-500">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
