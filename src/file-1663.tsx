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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg mb-6 text-gray-700">Fetching users from the server...</p>
      <div className="bg-white shadow-md rounded-lg px-8 py-6">
        <h2 className="text-2xl font-semibold mb-4">Users List</h2>
        <ul className="space-y-2">
          {users.length > 0 ? (
            users.map((user: any) => (
              <li key={user.id} className="p-4 border border-gray-300 rounded hover:bg-gray-50 transition">
                {user.name}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No users found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
