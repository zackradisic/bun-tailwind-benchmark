import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <header className="bg-white shadow-md rounded-md p-4 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Bun with Tailwind!</h1>
        <p className="mt-2 text-gray-600">Building fullstack applications has never been easier.</p>
      </header>
      
      <main className="mt-8 w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700">Your API data:</h2>
          <ul className="mt-4 space-y-2">
            {/* This would normally be populated with data from an API */}
            <li className="bg-gray-100 p-2 rounded-md">User 1</li>
            <li className="bg-gray-100 p-2 rounded-md">User 2</li>
            <li className="bg-gray-100 p-2 rounded-md">User 3</li>
          </ul>
        </div>
      </main>
      
      <footer className="mt-8 text-gray-600">
        <p className="text-center">Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
