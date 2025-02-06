import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">This is a fullstack application built with React, TypeScript, and Tailwind CSS.</p>
      <div className="mt-6 flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300">
          Client Action
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300">
          Server Action
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Server Response:</h2>
        <pre className="bg-gray-200 p-4 rounded-lg mt-2 md:w-1/2">{JSON.stringify({ message: "Data fetched from server!" }, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
