import "./style.css";
import React from 'react';

// Server-side function to fetch data from API
async function fetchUsers() {
  const response = await fetch('/api/users');
  return response.json();
}

// Client-side component
const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {users.map(user => (
            <li key={user.id} className="p-4 hover:bg-gray-100 transition">
              <div className="flex items-center">
                <div className="text-lg font-semibold text-gray-800">{user.name}</div>
                <div className="ml-auto text-gray-600">{user.email}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
