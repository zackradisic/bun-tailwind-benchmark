import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {users.map((user: { id: number; name: string }) => (
            <li key={user.id} className="p-4 hover:bg-gray-50 transition">
              <div className="text-lg font-medium text-gray-800">{user.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
