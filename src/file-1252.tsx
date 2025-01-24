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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-8">Fast and simple fullstack development with Bun, React, and TypeScript.</p>
      <button 
        onClick={fetchData} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Fetch Users
      </button>
      <div className="mt-6 w-full max-w-md">
        <ul className="bg-white shadow-md rounded-lg">
          {/* This list will be populated with fetched users */}
        </ul>
      </div>
    </div>
  );
};

export default App;
