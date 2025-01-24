import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Bun with Tailwind CSS!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This is an example of a fullstack application using React & TypeScript.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          Server Request
        </button>
        <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
          Client Action
        </button>
      </div>
      <div className="mt-10 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">API Data:</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-600">User 1: John Doe</li>
          <li className="text-gray-600">User 2: Jane Smith</li>
          <li className="text-gray-600">User 3: Alice Johnson</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
