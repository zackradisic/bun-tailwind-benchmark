import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full p-5 bg-blue-600 text-white text-2xl font-bold text-center shadow-lg">
        Bun's Fast Tailwind Integration
      </header>
      <main className="flex-grow w-full flex items-center justify-center">
        <div className="p-10 bg-white rounded-lg shadow-md max-w-md">
          <h1 className="text-3xl font-semibold mb-4 text-center">
            Welcome to Your Bun App
          </h1>
          <p className="text-gray-700 mb-6 text-center">
            Built with React, TypeScript, and fast server-side rendering!
          </p>
          <button className="w-full py-2 mt-4 font-semibold text-white bg-green-500 hover:bg-green-600 rounded">
            Get Started
          </button>
        </div>
      </main>
      <footer className="w-full p-3 bg-gray-800 text-white text-center">
        Powered by Bun and Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
