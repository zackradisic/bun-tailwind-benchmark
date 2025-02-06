import "./style.css";
import React from 'react';

const App: React.FC = () => {
  // Sample API call to backend
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun + Tailwind CSS!</h1>
      <p className="text-lg text-gray-700">Fetching users from our API:</p>
      <ul className="mt-4 space-y-2">
        {users.map((user, index) => (
          <li key={index} className="bg-white shadow-lg rounded-lg p-3">
            <span className="font-semibold">{user.name}</span> - <span className="text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
