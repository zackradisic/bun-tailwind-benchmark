import React from 'react';

const App = () => {
  const fetchData = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <button 
        className="mt-6 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        onClick={fetchData}
      >
        Fetch Users
      </button>
      <div className="mt-8 p-4 border rounded bg-white shadow-md w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">User List:</h2>
        <ul className="mt-2 list-disc pl-5">
          {/* User items will be displayed here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
