import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun's Fullstack App!</h1>
      <p className="mt-4 text-lg text-gray-700">Bun + React + TypeScript + Tailwind</p>
      <div className="mt-6 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-500">API Data</h2>
        <div className="mt-4">
          <ul className="list-disc pl-5">
            {/* Fetching data from our Bun API */}
            {fetch('/api/users')
              .then(res => res.json())
              .then(data => data.map((user: any) => (
                <li key={user.id} className="text-lg text-gray-800">{user.name}</li>
              )))}
          </ul>
        </div>
      </div>
      <footer className="mt-8 text-sm text-gray-500">Built with ❤️ using Bun</footer>
    </div>
  );
};

export default App;
