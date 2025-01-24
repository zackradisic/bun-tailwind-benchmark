import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-extrabold text-white mb-4">Welcome to Bun + React + TypeScript!</h1>
      <p className="text-lg text-gray-200 mb-8">Your fullstack app is up and running!</p>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">API Data:</h2>
        <div className="mt-4">
          {/* Example of fetching data from the server */}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={async () => {
              const response = await fetch("/api/data");
              const data = await response.json();
              console.log(data);
            }}
          >
            Fetch Data
          </button>
        </div>
      </div>
      <footer className="mt-8 text-gray-100">
        <p className="text-sm">Built with ❤️ using Bun</p>
      </footer>
    </div>
  );
};

export default App;
