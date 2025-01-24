import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-gray-800">
      <header className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Bun with Tailwind CSS!
        </h1>
      </header>
      <main className="flex flex-col items-center">
        <button className="mb-6 px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition duration-200">
          Click Me!
        </button>
        <div className="p-4 border border-gray-300 rounded-lg bg-white shadow-lg">
          <p className="text-lg">
            This is a simple React component demonstrating the power of
            <span className="font-semibold text-blue-500"> Bun</span> and{" "}
            <span className="font-semibold text-teal-500">Tailwind CSS</span> to build fullstack applications quickly!
          </p>
        </div>
      </main>
      <footer className="mt-auto py-4">
        <div className="text-center text-sm text-gray-600">
          Made with ❤️ using Bun and TailwindCSS
        </div>
      </footer>
    </div>
  );
};

export default App;
