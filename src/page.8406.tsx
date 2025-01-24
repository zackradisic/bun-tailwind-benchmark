import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Welcome to Bun with React & TypeScript!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application showcasing Bun's Tailwind integration.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300">
          Button 1
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300">
          Button 2
        </button>
      </div>
      <div className="mt-10 p-4 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">Server Response:</h2>
        <pre className="bg-gray-200 p-2 rounded">Fetching data from server...</pre>
      </div>
    </div>
  );
};

export default App;
