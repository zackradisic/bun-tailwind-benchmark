import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4">
        <h1 className="text-white text-3xl font-bold">Welcome to Bun with Tailwind!</h1>
      </header>
      <main className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-700">Fullstack Development Made Easy</h2>
        <p className="mt-4 text-gray-600">
          This is a demo app showcasing how simple it is to use Bun with React and TypeScript.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <h3 className="font-bold text-xl">Server Side</h3>
            <p className="text-gray-700">Handling API requests effortlessly!</p>
            <code className="block bg-gray-200 p-2 rounded mt-2">
              <span>async fetch(req) &#123; /* API logic */ &#125;</span>
            </code>
          </div>
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <h3 className="font-bold text-xl">Client Side</h3>
            <p className="text-gray-700">Rendering components using React!</p>
            <code className="block bg-gray-200 p-2 rounded mt-2">
              <span>const root = createRoot(document.getElementById('root'));</span>
            </code>
          </div>
        </div>
      </main>
      <footer className="w-full p-4 mt-10 bg-gray-800">
        <p className="text-center text-white">&copy; 2023 Bun Fullstack Demo</p>
      </footer>
    </div>
  );
};

export default App;
