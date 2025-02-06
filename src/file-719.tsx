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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Bun + Tailwind App!</h1>
      <p className="text-lg text-gray-700">
        This is a demo component showcasing how fast and simple it is to build fullstack applications using Bun, React, and TypeScript.
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Fetch Users
      </button>
    </div>
  );
};

export default App;
