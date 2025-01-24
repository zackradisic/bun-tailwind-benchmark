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
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-gray-700 mb-6">Welcome to Bun with TailwindCSS</h1>
      <p className="text-lg text-gray-600 mb-4">Using React & TypeScript</p>
      <button 
        onClick={fetchUsers} 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Fetch Users
      </button>
      <div className="mt-6">
        <span className="text-green-500">Users will be logged in console.</span>
      </div>
    </div>
  );
};

export default App;
