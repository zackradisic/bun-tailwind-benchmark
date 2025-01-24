import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-white shadow-md rounded-lg mb-4 p-4 text-center">
        <h1 className="text-2xl font-bold text-blue-600">Welcome to My Bun + Tailwind App!</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl mb-4">Fast & Simple Fullstack Experience</h2>
          <p className="text-gray-700 mb-4">
            This application showcases how quickly you can build a fullstack app using Bun with React and TypeScript!
          </p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Click Me!
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center rounded-lg mt-4">
        <p>Powered by Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
