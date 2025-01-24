import React from 'react';

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    return response.json();
  };

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    })();
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">User List</h1>
      <ul className="w-full max-w-lg bg-white rounded-lg shadow-lg p-4">
        {users.length === 0 && <li className="text-gray-500">Loading...</li>}
        {users.map(user => (
          <li key={user.id} className="border-b border-gray-200 py-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">{user.name}</span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
