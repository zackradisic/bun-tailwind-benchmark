import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600">Bun + Tailwind + React</h1>
      <p className="mt-4 text-lg text-gray-700">Build fullstack applications with ease!</p>
      
      <div className="mt-10 bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800">API Data</h2>
        <ul className="mt-4 space-y-2">
          {/* Simulating fetching data from the API */}
          {[
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Charlie" }
          ].map(user => (
            <li key={user.id} className="py-2 px-4 bg-gray-200 rounded-lg">
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      <footer className="mt-10 text-center">
        <p className="text-gray-600">Powered by Bun</p>
      </footer>
    </div>
  );
};

export default App;
