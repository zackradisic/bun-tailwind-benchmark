import React from 'react';

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    // Fetch users from the API
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-4">
          {users.length > 0 ? (
            users.map(user => (
              <li key={user.id} className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No users found...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
