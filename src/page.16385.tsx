import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a demo of a fullstack application.</p>
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
        Click Me
      </button>
      <div className="mt-8 p-4 bg-white rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">Server Response:</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-800">Data loaded fast!</li>
          <li className="text-gray-800">Simple integration with Tailwind!</li>
          <li className="text-gray-800">Bun makes development delightful!</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
