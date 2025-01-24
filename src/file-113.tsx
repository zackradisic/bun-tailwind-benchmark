import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 shadow-lg">
        <h1 className="text-3xl font-bold">Bun + Tailwind Integration Demo</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">Welcome to Bun!</h2>
          <p className="mb-4 text-gray-700">
            Experience the speed and simplicity of building fullstack applications with Bun using React and TypeScript.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white w-full p-4 text-center">
        <p className="text-sm">© 2023 Bun Tailwind Integration Demo</p>
      </footer>
    </div>
  );
};

export default App;
