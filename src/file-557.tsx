import "./style.css";
import React from 'react';

const App = () => {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">User List</h1>
      <ul className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        {users.length === 0 ? (
          <li className="text-gray-500">Loading...</li>
        ) : (
          users.map(user => (
            <li key={user.id} className="border-b py-4 flex justify-between items-center text-gray-700">
              <span>{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
