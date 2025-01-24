import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-6">Building with React, TypeScript, and TailwindCSS</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Client Action
        </button>
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          Server Action
        </button>
      </div>
      <div className="mt-10 p-5 border rounded shadow-lg bg-white">
        <h2 className="text-2xl font-semibold">API Response:</h2>
        <pre className="bg-gray-100 p-3 rounded">{"{ message: 'Hello from the server!' }"}</pre>
      </div>
    </div>
  );
};

export default App;
