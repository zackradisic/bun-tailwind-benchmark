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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind CSS</h1>
      <p className="text-lg text-gray-700 mb-6">This is a demonstration of a fullstack application.</p>
      <button
        onClick={fetchUsers}
        className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg shadow-lg transition duration-300"
      >
        Fetch Users
      </button>
      <div className="mt-10 p-4 w-full max-w-md bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800">User List</h2>
        <ul className="mt-4 space-y-2">
          {/* Render users here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
