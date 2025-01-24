import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to My Bun App</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Bun + Tailwind CSS</h2>
        <p className="text-gray-700 mb-6">
          This application is built with Bun's fullstack capabilities, React, and TypeScript, showcasing Tailwind CSS for styling.
        </p>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
          Click Me
        </button>
      </main>
      <footer className="absolute bottom-0 w-full p-4 bg-blue-600 text-white text-center">
        <p>© 2023 - Built with Bun</p>
      </footer>
    </div>
  );
};

export default App;
