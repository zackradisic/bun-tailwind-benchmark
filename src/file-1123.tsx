import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a fullstack application showcasing Bun's capabilities with React and TypeScript.
      </p>
      <div className="flex flex-wrap justify-center">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-2 mb-2">
          Client Button 1
        </button>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 mr-2 mb-2">
          Client Button 2
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">API Data</h2>
        <div className="p-4 bg-white shadow rounded-lg">
          <pre className="text-sm text-gray-700">{JSON.stringify({ message: "Data from server..." }, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
