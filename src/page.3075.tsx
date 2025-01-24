import React from "react";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-5 text-blue-600">Welcome to My Bun App</h1>
      <p className="text-lg mb-5 text-gray-700">This is a fullstack application built with Bun, React, and TypeScript!</p>
      <button className="bg-blue-500 text-white p-3 rounded shadow-lg hover:bg-blue-400 transition duration-300" onClick={fetchUsers}>
        Fetch Users from API
      </button>
      <div className="mt-5 p-5 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">User Data:</h2>
        <pre className="bg-gray-200 p-3 rounded text-sm">
          {/* User Data will be shown here */}
        </pre>
      </div>
    </div>
  );
};

export default App;
