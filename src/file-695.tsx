import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-white mb-10">Fetching user data from the server:</p>
      <div className="w-full max-w-md">
        <ul className="bg-white shadow-md rounded-lg">
          {users.length > 0 ? (
            users.map(user => (
              <li className="p-4 border-b last:border-b-0 border-gray-200" key={user.id}>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-700">{user.email}</p>
              </li>
            ))
          ) : (
            <li className="p-4 text-center text-gray-500">Loading...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
