import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with React & TypeScript!</h1>
      <p className="text-lg text-gray-700 mb-8">This demo showcases the power of Bun with Tailwind CSS.</p>
      <button 
        onClick={fetchUsers} 
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Fetch Users
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Users List:</h2>
        <ul className="mt-2 space-y-2">
          {/* This will be dynamically filled with users */}
        </ul>
      </div>
    </div>
  );
};

export default App;
