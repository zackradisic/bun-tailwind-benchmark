import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-white shadow-md w-full p-4">
        <h1 className="text-3xl font-bold text-center text-blue-600">Welcome to My Bun App</h1>
      </header>
      <main className="flex-1 w-full flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">API Data</h2>
          <div className="flex flex-col space-y-2">
            {/* This will be replaced with API data */}
            <div className="p-4 border border-gray-300 rounded-lg">User 1</div>
            <div className="p-4 border border-gray-300 rounded-lg">User 2</div>
            <div className="p-4 border border-gray-300 rounded-lg">User 3</div>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow-md w-full p-4 text-center">
        <p className="text-gray-500">Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
