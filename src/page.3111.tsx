import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4 w-full">
        <h1 className="text-white text-3xl font-bold text-center">Bun + Tailwind Demo</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Welcome to the Fullstack App!</h2>
            <p className="text-gray-700 mb-4">
              This component showcases how quickly you can get started building fullstack applications 
              using Bun with React and Tailwind CSS.
            </p>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Click Me
            </button>
          </div>
        </div>
      </main>
      <footer className="p-4 bg-gray-300 w-full text-center">
        <p className="text-gray-600">Built with ❤️ using Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
