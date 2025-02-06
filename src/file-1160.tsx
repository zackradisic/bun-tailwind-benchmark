import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    if(!response.ok) throw new Error('Network response was not ok');
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 p-10">
      <h1 className="text-5xl font-bold text-white mb-5">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-white mb-3">This is a fullstack application using Bun, React, and TailwindCSS.</p>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-3">User Data:</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {/* Here we'd map through fetched users, currently hardcoded for demo */}
          <li className="mb-2">User 1</li>
          <li className="mb-2">User 2</li>
          <li>User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
