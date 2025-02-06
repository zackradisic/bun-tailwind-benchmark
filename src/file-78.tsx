import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center p-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
        <p className="text-lg text-gray-700 mb-2">
          This example showcases how easy it is to build fullstack applications with Bun, React, and TypeScript.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Click the button below to interact with the server.
        </p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={async () => {
            const response = await fetch("/api/users");
            const data = await response.json();
            console.log(data);
          }}
        >
          Fetch Users
        </button>
      </main>
      <footer className="flex items-center justify-center w-full h-16 bg-white border-t">
        <span className="text-gray-500">Powered by Bun, React & TypeScript</span>
      </footer>
    </div>
  );
};

export default App;
