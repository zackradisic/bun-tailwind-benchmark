import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl font-extrabold text-white mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-white mb-8">Experience fullstack development like never before.</p>
      <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
        Get Started
      </button>
      <div className="mt-8">
        <a
          href="/api/users"
          className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Fetch Users
        </a>
      </div>
    </div>
  );
};

export default App;
