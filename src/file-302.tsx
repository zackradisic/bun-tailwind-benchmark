import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-xl text-gray-700 mb-8">Fast & simple fullstack development.</p>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800">API Data:</h2>
        <div className="mt-4">
          <div className="flex justify-between items-center bg-blue-100 p-4 rounded my-1">
            <span>User 1</span>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Fetch Data</button>
          </div>
          <div className="flex justify-between items-center bg-green-100 p-4 rounded my-1">
            <span>User 2</span>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Fetch Data</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
