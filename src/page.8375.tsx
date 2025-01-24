import React from 'react';

const App: React.FC = () => {
  // Sample state to fetch from the server
  const [users, setUsers] = React.useState([]);

  // Fetch users from the backend
  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">User List</h1>
        {users.length === 0 ? (
          <p className="text-gray-500 text-center">Loading...</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {users.map((user: any) => (
              <li key={user.id} className="py-4">
                <p className="font-semibold text-lg">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
