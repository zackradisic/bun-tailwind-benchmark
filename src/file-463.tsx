import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <header className="bg-blue-500 w-full p-4">
        <h1 className="text-3xl text-white text-center">Bun + React + TypeScript</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl mb-4">Welcome to Bun!</h2>
          <p className="text-gray-700 mb-4">
            This is a demo showcasing the amazing speed of building fullstack applications!
          </p>
          <a href="/api/data" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
            Fetch Data
          </a>
        </div>
      </main>
      <footer className="bg-blue-500 w-full p-4 mt-4">
        <p className="text-center text-white">Powered by Bun, React & TypeScript</p>
      </footer>
    </div>
  );
};

export default App;
