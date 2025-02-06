import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700">This is a fullstack application built with Bun, React, and TypeScript.</p>
      <button
        className="mt-6 px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 transition duration-300"
        onClick={fetchData}
      >
        Fetch Users
      </button>
    </div>
  );
};

export default App;
