import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Build Fullstack Applications with Ease</p>
      <div className="space-x-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
          Client Button
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition">
          Server Button
        </button>
      </div>
      <div className="mt-8 p-4 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-semibold">API Response</h2>
        <pre className="bg-gray-200 p-2 rounded">
          {JSON.stringify({ message: 'Hello from the API!' }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
