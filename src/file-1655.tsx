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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">User List</h1>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-4 bg-gray-200 rounded flex justify-between">
              <span className="font-semibold">{user.name}</span>
              <span>{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
