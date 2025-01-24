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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-xl font-bold text-center text-blue-600 mb-4">User List</h1>
        <ul className="space-y-2">
          {users.map((user, index) => (
            <li key={index} className="border-b border-gray-200 pb-2">
              <span className="text-gray-800 font-medium">{user.name}</span>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 text-center mt-4">Powered by Bun & Tailwind CSS</p>
      </div>
    </div>
  );
};

export default App;
