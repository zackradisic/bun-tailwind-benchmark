import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4">
        <h1 className="text-xl font-bold">Bun + Tailwind Demo</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to the Bun + Tailwind Integration</h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          This is a fullstack application showcasing how fast and simple it is to
          build with Bun, React, and TypeScript.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-xs">
            <h3 className="text-xl font-semibold text-gray-700">Server Part</h3>
            <p className="text-gray-500 mt-2">Handle API requests seamlessly.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-xs">
            <h3 className="text-xl font-semibold text-gray-700">Client Part</h3>
            <p className="text-gray-500 mt-2">Render components with React quickly.</p>
          </div>
        </div>
      </main>
      <footer className="bg-blue-600 text-white w-full p-4">
        <p className="text-center text-sm">Built with Bun, React, TypeScript and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
