import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to My Bun + React App</h1>
      <p className="text-lg text-gray-700 mb-8">This app is powered by Bun and uses TypeScript with Tailwind CSS!</p>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold text-purple-600 mb-2">Server Response:</h2>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          onClick={async () => {
            const res = await fetch('/api/users');
            const data = await res.json();
            console.log(data);
          }}
        >
          Fetch Users
        </button>
      </div>
    </div>
  );
};

export default App;
