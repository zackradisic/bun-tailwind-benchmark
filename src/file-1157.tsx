import React from 'react';

const App: React.FC = () => {
  // Fetching data from server
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id} className="py-3 flex items-center justify-between">
              <span className="text-gray-600">{user.name}</span>
              <span className="text-blue-500">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
