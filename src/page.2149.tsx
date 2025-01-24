import React from "react";

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-5xl font-bold text-white mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-xl text-white mb-4">This is a fullstack application using React, TypeScript, and Tailwind CSS.</p>
      <button
        onClick={fetchUsers}
        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
      >
        Fetch Users
      </button>
      <div className="mt-6">
        <h2 className="text-2xl text-white">User List:</h2>
        <ul className="list-disc list-inside">
          {/* User list will be populated here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
