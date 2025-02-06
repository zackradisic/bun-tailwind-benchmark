import "./style.css";
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">User Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-md">
        <h2 className="text-2xl mb-4">User List</h2>
        {users.length > 0 ? (
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.id} className="p-4 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                <span className="font-semibold">{user.name}</span> - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default App;
