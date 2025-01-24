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
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun's Fullstack App!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This app demonstrates the power of Bun with TypeScript and Tailwind CSS!
      </p>
      <button
        onClick={fetchUsers}
        className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition duration-300"
      >
        Fetch Users
      </button>
    </div>
  );
};

export default App;
