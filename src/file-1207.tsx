import React from 'react';

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-4">Let's showcase the awesome Tailwind integration!</p>
      <button 
        onClick={fetchUsers} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
        Fetch Users
      </button>
      <div className="mt-8 p-4 border border-gray-300 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">User List</h2>
        <ul className="space-y-2">
          <li className="bg-white p-2 rounded shadow">User 1</li>
          <li className="bg-white p-2 rounded shadow">User 2</li>
          <li className="bg-white p-2 rounded shadow">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
