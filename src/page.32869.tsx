import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 p-6">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to My Bun App</h1>
      <p className="text-xl text-white mb-8">
        This is how simple and fast it is to integrate React with Bun and Tailwind!
      </p>
      <div className="flex space-x-4">
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300">
          Client Action
        </button>
        <button className="bg-white text-green-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-green-100 transition duration-300">
          Server Action
        </button>
      </div>
    </div>
  );
};

export default App;
