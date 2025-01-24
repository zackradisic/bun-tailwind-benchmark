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
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-white text-4xl font-bold mb-4">Bun + TailwindCSS Example</h1>
      <p className="text-white text-lg">This is a simple fullstack app using Bun, React, and TailwindCSS</p>
      <div className="mt-5">
        <button 
          className="px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-blue-500 hover:text-white transition duration-300"
          onClick={fetchUsers}
        >
          Fetch Users
        </button>
      </div>
    </div>
  );
};

export default App;
