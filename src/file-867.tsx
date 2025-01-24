import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="bg-white rounded-lg shadow-lg max-w-md w-full">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="p-4 border-b last:border-b-0 hover:bg-gray-100">
              <span className="font-medium">{user.name}</span> - <span className="text-gray-600">{user.email}</span>
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-gray-500">No users found</li>
        )}
      </ul>
      <footer className="mt-8 text-sm text-gray-500">
        <p>&copy; 2023 My Fullstack Application</p>
      </footer>
    </div>
  );
};

export default App;
