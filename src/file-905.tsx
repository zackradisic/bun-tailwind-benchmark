import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white shadow">
        <h1 className="text-xl font-bold">Welcome to My Bun Fullstack App</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Server-side Rendering</h2>
          <p className="text-gray-700 mb-4">
            This app showcases the power of Bun with React and TypeScript.
            We've integrated Tailwind CSS for rapid styling!
          </p>
          <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition">
            Fetch Data
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 w-full p-4 text-white text-center">
        <p>Made with ❤️ using Bun</p>
      </footer>
    </div>
  );
};

export default App;
