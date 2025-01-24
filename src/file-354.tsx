import React from 'react';

// Tailwind class for styling
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        Welcome to Bun with React & TypeScript!
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        This is a demo showcasing Bun's new Tailwind integration.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200">
        Click me
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Server-Side Response:</h2>
        <div className="mt-2 p-4 border border-gray-300 rounded bg-white">
          <pre className="text-gray-600">{JSON.stringify({ message: 'Hello from the server!' }, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
