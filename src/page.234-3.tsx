import React from "react";

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-500 to-blue-400">
      <h1 className="text-5xl font-bold text-white mb-6">
        Build Fullstack Apps Fast with Bun!
      </h1>
      <p className="text-xl text-white mb-4 max-w-lg text-center">
        Experience the power of Bun's fullstack capabilities with insane speed and simplicity!
      </p>
      <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105">
        Get Started
      </button>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold">Fast Development</h2>
          <p>Instantly see changes with hot reloading and quick bundling.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold">Simple API</h2>
          <p>Seamlessly handle backend logic within the same application.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold">Integrated Tailwind CSS</h2>
          <p>Style your applications effortlessly with Tailwind's utility classes.</p>
        </div>
      </div>
      <footer className="mt-10 text-white text-sm">
        &copy; {new Date().getFullYear()} Bun - All rights reserved.
      </footer>
    </div>
  );
};

export default FastAndSimpleDemo;
