import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome to My Bun App!</h1>
        <p className="text-gray-700 text-center mb-6">Using React, TypeScript, and Tailwind CSS for rapid development.</p>
        <div className="flex justify-around">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Client Action</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">Server Action</button>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Features:</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">Rapidly create and serve your application</li>
            <li className="mb-2">Built-in API handling with Bun's server</li>
            <li>Integration with Tailwind CSS for beautiful UI</li>
          </ul>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">Built with ♥ using Bun, React, and TypeScript</p>
      </div>
    </div>
  );
};

export default App;
