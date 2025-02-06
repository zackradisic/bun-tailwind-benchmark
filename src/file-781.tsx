import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">User Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Users List</h2>
        <ul className="space-y-2">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="flex justify-between p-4 border-b">
                <span className="text-lg">{user.name}</span>
                <span className="text-gray-600">{user.email}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-400">No users found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
