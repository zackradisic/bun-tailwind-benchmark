import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Server Action</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Client Action</button>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-gray-800">Server Side:</h2>
          <p className="text-gray-600">Fetch data directly from your API using seamless integration with Bun.</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-gray-800">Client Side:</h2>
          <p className="text-gray-600">Interact with the server asynchronously, making the app responsive.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
