import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Users List</h1>
      <div className="w-full max-w-md">
        <ul className="bg-white shadow-md rounded-lg overflow-hidden">
          {users.map((user, index) => (
            <li key={index} className="p-4 border-b">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">{user.name}</span>
                <span className="text-sm text-gray-500">{user.email}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
