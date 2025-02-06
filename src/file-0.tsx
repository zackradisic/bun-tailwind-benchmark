import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-5">This is a fullstack app made incredibly simple.</p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
          Client Action
        </button>
        <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300">
          Server Action
        </button>
      </div>
      <div className="mt-10">
        <p className="text-sm text-gray-500">Data fetched from the server:</p>
        <ul className="list-disc mt-2">
          <li className="text-blue-700">User 1</li>
          <li className="text-blue-700">User 2</li>
          <li className="text-blue-700">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
