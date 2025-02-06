import "./style.css";
import React from 'react';

const App = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-600 mb-8">
        This is a fullstack application powered by Bun, React, and TypeScript.
      </p>
      <button
        onClick={fetchUsers}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-400 transition duration-300"
      >
        Fetch Users
      </button>
      <div className="mt-4 p-4 rounded bg-white shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Fetched Users:</h2>
        {/* Here we'd map through users to display them */}
        {/* Example: users.map(user => <div key={user.id}>{user.name}</div>) */}
      </div>
    </div>
  );
};

export default App;
