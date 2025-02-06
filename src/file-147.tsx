import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

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
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
        <ul className="space-y-2">
          {users.length === 0 ? (
            <li className="text-gray-500">Loading users...</li>
          ) : (
            users.map((user: { id: number; name: string }) => (
              <li key={user.id} className="p-2 bg-white rounded-lg shadow hover:bg-gray-200 transition">
                {user.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
