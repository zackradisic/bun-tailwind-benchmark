import "./style.css";
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Bun + Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">Fullstack Development with Bun, React, and TypeScript</p>
      <button 
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
        onClick={fetchData}
      >
        Fetch Users
      </button>
      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-gray-800">Users:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {/* User data would be rendered here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
