import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a simple demonstration of Bun's fullstack capabilities with React and Tailwind CSS.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
        Click Me
      </button>
      <div className="mt-8 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Data from the Server:</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-600">Data Item 1</li>
          <li className="text-gray-600">Data Item 2</li>
          <li className="text-gray-600">Data Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
