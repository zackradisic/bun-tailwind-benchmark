import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="w-full p-6 bg-blue-600 text-white shadow-md">
        <h1 className="text-3xl font-bold">Bun + Tailwind + React</h1>
      </header>
      
      <main className="flex flex-col items-center justify-center flex-1 p-10">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to Fullstack Development!</h2>
            <p className="text-gray-600 mb-4">
              This is a demo showcasing how easy it is to use Bun with React and TypeScript.
            </p>
            <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full p-6 bg-gray-800 text-white">
        <p className="text-center">Built with ❤️ using Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
