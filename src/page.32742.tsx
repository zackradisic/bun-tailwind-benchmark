import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun Fullstack App</h1>
      <p className="text-lg text-gray-700 mb-8">This is a simple demonstration of Bun's Tailwind integration!</p>
      <button className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-lg transition duration-200">
        Click Me!
      </button>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">API Data:</h2>
        <ul className="mt-4">
          {/* Placeholder for dynamically loaded data */}
          <li className="text-lg text-gray-600">User 1</li>
          <li className="text-lg text-gray-600">User 2</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
