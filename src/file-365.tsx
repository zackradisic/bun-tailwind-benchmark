import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a demo of Bun's fullstack capabilities with React & TypeScript.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
        Click Me
      </button>
      <div className="mt-10 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Response:</h2>
        <pre className="p-2 bg-gray-200 rounded-md">Fetching from the server...</pre>
      </div>
    </div>
  );
};

export default App;
