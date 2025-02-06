import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a fullstack app using Bun's server and React on the client with TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105">
          <h2 className="text-2xl font-semibold text-indigo-600">Client Side</h2>
          <p className="mt-2 text-gray-600">
            All rendered using Tailwind CSS to keep it fast and responsive.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-600">Server Side</h2>
          <p className="mt-2 text-gray-600">
            Fast API responses managed by Bun's server handling.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105">
          <h2 className="text-2xl font-semibold text-red-600">Fullstack</h2>
          <p className="mt-2 text-gray-600">
            Experience the seamless integration of frontend and backend.
          </p>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">
        Get Started
      </button>
    </div>
  );
};

export default App;
