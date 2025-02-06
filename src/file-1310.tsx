import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <header className="w-full text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun + Tailwind!</h1>
        <p className="text-xl text-gray-700">A fullstack app built with React & TypeScript</p>
      </header>
      <main className="flex flex-wrap justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-green-600">Fast & Simple</h2>
          <p className="text-gray-600 mt-2">Build your applications quickly with Bun's bundler and Tailwind CSS.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-600">Fullstack Capabilities</h2>
          <p className="text-gray-600 mt-2">Run your frontend and backend seamlessly in a single app.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-red-600">Dynamic APIs</h2>
          <p className="text-gray-600 mt-2">Utilize Bun's API handling for fast data integration.</p>
        </div>
      </main>
      <footer className="w-full text-center mt-8">
        <p className="text-gray-500">Powered by Bun, Tailwind CSS & React</p>
      </footer>
    </div>
  );
};

export default App;
