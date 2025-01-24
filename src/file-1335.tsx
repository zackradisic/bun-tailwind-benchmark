import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun + Tailwind + React</h1>
      <p className="text-lg mb-6">Fetching users from the server:</p>
      <ul className="bg-white shadow-md rounded-lg p-4">
        {users.length > 0 ? (
          users.map((user: any, index: number) => (
            <li key={index} className="border-b py-2 text-gray-700">
              {user.name}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No users found</p>
        )}
      </ul>
    </div>
  );
};

export default App;
