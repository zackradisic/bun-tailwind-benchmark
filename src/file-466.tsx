import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to the Bun + Tailwind Demo</h1>
      </header>
      <main className="flex-1 w-full max-w-2xl p-5">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Fast Fullstack Development!</h2>
          <p className="mt-4 text-gray-600">
            This component showcases how quickly you can develop a fullstack application using Bun, React, and Tailwind CSS.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li className="text-gray-700"><span className="font-bold">Server:</span> Handles API requests effortlessly.</li>
            <li className="text-gray-700"><span className="font-bold">Client:</span> Renders React components swiftly with Tailwind styles.</li>
          </ul>
        </div>
      </main>
      <footer className="bg-gray-800 w-full p-4 text-white text-center">
        <p className="text-sm">Built with ❤️ using Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
