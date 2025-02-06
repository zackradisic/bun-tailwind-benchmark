import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-10">
      <h1 className="text-4xl font-bold text-white mb-6">User List</h1>
      <ul className="bg-white rounded-lg shadow-lg w-full max-w-md p-4">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="border-b border-gray-200 py-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-800">{user.name}</span>
                <span className="text-gray-500">{user.email}</span>
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-600">Loading users...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
