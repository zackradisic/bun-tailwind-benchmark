import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-5 text-center">
        <h1 className="text-3xl font-bold">Welcome to My Bun + Tailwind App</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Fast and Simple Fullstack Development</h2>
        <p className="text-center mb-6 max-w-md text-gray-700">
          This app is powered by Bun and TailwindCSS, showcasing the speed and simplicity of building fullstack applications with React & TypeScript.
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-300">
          Click Me!
        </button>
      </main>
      <footer className="absolute bottom-0 w-full py-4 bg-gray-800 text-white text-center">
        <p>Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
