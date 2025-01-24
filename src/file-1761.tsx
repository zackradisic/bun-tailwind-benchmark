import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bun Fullstack App</h1>
      <p className="text-lg mb-8">This is your fullstack application using React, TypeScript, and Tailwind CSS.</p>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-3">Quick API Fetch</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => {
            const response = await fetch('/api/users');
            const data = await response.json();
            alert(JSON.stringify(data, null, 2));
          }}
        >
          Fetch Users
        </button>
      </div>
    </div>
  );
};

export default App;
