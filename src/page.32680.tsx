import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
        Welcome to Bun with Tailwind!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Building fullstack applications with Bun is now faster and easier than ever.
      </p>
      <button className="px-6 py-2 bg-green-500 text-white rounded shadow-lg hover:bg-green-600 transition duration-200">
        Click Me!
      </button>
      <footer className="mt-10 text-gray-500">
        <p>Powered by Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
