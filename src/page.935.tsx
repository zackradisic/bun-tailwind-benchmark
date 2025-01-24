import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-xl text-gray-200 mb-8">Building fullstack applications made easy!</p>
      <button className="px-6 py-3 bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-200 transition">
        Click Me
      </button>
      <div className="mt-10 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">API Response</h2>
        <pre className="bg-gray-100 p-3 rounded-md">
          {JSON.stringify({ message: 'Hello from the server!' }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
