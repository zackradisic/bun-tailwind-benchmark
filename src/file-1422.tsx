import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <header className="flex flex-col items-center mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Welcome to My Bun App!</h1>
        <p className="text-lg text-white">Built with React, TypeScript, and Tailwind CSS</p>
      </header>
      <main className="flex flex-wrap justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-center">Fast API Response</h2>
          <button
            className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-400 transition duration-200"
            onClick={async () => {
              const response = await fetch("/api/users");
              const data = await response.json();
              console.log(data);
            }}
          >
            Fetch Users
          </button>
        </div>
        <div className="w-full max-w-md p-6 mt-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-center">Interactive Feature</h2>
          <input
            type="text"
            placeholder="Type something..."
            className="w-full p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
          />
        </div>
      </main>
    </div>
  );
};

export default App;
