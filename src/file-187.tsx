import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    // Fetching data from our Bun server
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-5">
      <h1 className="text-4xl font-bold text-white mb-5">User List</h1>
      <ul className="bg-white rounded-lg shadow-lg p-5 w-full max-w-md">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="border-b border-gray-300 py-3 text-lg text-gray-700">
              {user.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500">Loading users...</li>
        )}
      </ul>
      <footer className="mt-5 text-center text-white">
        <p>Powered by Bun &amp; Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
