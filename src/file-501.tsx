import "./style.css";
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-bold text-white mb-6">User List</h1>
      <ul className="w-full max-w-lg bg-white rounded-lg shadow-lg">
        {users.map(user => (
          <li key={user.id} className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-100">
            <span className="text-lg font-medium">{user.name}</span>
            <span className="text-sm text-gray-600">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
