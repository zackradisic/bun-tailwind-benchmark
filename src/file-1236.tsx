import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">Fast, simple, and full of features.</p>
      <div className="flex flex-wrap justify-center space-x-4">
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition">Client Button</button>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">Server Button</button>
      </div>
      <div className="mt-8 p-4 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">API Response:</h2>
        <pre className="bg-gray-100 p-2 rounded">{"{ message: 'Hello from the server!' }"}</pre>
      </div>
    </div>
  );
};

export default App;
