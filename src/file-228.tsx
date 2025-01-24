import React from 'react';

const App = () => {
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
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-8">Using Tailwind CSS with React and TypeScript</p>
      <button 
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition duration-300"
        onClick={fetchUsers}
      >
        Fetch Users
      </button>
      <div className="mt-6 p-4 border border-gray-300 rounded-md bg-white shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">User List</h2>
        <ul className="list-disc list-inside mt-2">
          {/* User items will be placed here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
