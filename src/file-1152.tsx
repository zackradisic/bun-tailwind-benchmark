import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-white text-center p-6 rounded-lg shadow-lg bg-opacity-70">
        <h1 className="text-4xl font-bold mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-lg mb-6">Build fullstack applications effortlessly.</p>
        <a
          href="/api/users"
          className="mt-4 inline-block bg-white text-blue-500 font-semibold py-2 px-4 rounded transition duration-300 transform hover:scale-105 hover:bg-gray-100"
        >
          Fetch Users
        </a>
      </div>
    </div>
  );
};

export default App;
