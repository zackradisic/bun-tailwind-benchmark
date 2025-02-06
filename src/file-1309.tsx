import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to Our Bun App!</h1>
      </header>
      <main className="flex-1 flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">User List</h2>
          <ul className="space-y-2">
            {/* Simulating data fetched from the server */}
            <li className="border-b-2 border-gray-300 pb-2">User 1</li>
            <li className="border-b-2 border-gray-300 pb-2">User 2</li>
            <li className="border-b-2 border-gray-300 pb-2">User 3</li>
            <li className="border-b-2 border-gray-300 pb-2">User 4</li>
            <li className="border-b-2 border-gray-300 pb-2">User 5</li>
          </ul>
        </div>
      </main>
      <footer className="bg-blue-600 p-4 text-white text-center">
        <p className="text-sm">2023 © Your Company</p>
      </footer>
    </div>
  );
};

export default App;
