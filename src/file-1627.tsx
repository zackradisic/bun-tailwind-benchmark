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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-4">This is a demonstration of Bun with Tailwind CSS.</p>
      <button
        onClick={fetchUsers}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Fetch Users
      </button>
      <div className="mt-6 p-4 border border-gray-300 rounded">
        <h2 className="text-2xl font-semibold text-gray-800">User List:</h2>
        <ul className="list-disc list-inside">
          {/* User list will be rendered here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
