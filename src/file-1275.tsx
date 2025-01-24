import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun with React & TypeScript!</h1>
      <p className="text-lg text-gray-700 mb-10">
        This is a demonstration of how seamlessly you can build fullstack applications using Bun, React, and Tailwind CSS.
      </p>
      <div className="flex flex-wrap justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
          Client Button
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">
          Server Button
        </button>
      </div>
      <div className="w-full max-w-md mt-10">
        <p className="text-center text-xl font-semibold">Data from the server:</p>
        <ul className="bg-white shadow-md rounded-lg mt-4 divide-y divide-gray-200">
          {/* Simulating server response using hardcoded data */}
          <li className="p-4">User 1</li>
          <li className="p-4">User 2</li>
          <li className="p-4">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
