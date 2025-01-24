import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">Your fullstack app is up and running.</p>
      <button className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition duration-200">
        Click Me
      </button>
      <div className="mt-8 p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Response:</h2>
        <pre className="text-sm text-gray-600">
          {JSON.stringify({ message: 'Hello from Bun!' }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
