import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6 w-full text-center shadow-lg">
        <h1 className="text-4xl font-bold">Welcome to Bun with Tailwind!</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Client-Server Interaction</h2>
          <p className="mb-6 text-gray-700">
            This is a demo of how simple it is to use Bun for fullstack development with React and TypeScript.
          </p>
          <button
            onClick={async () => {
              const response = await fetch("/api/data");
              const data = await response.json();
              alert(JSON.stringify(data));
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Fetch Data from Server
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 w-full text-center">
        &copy; {new Date().getFullYear()} Bun & Tailwind Demo
      </footer>
    </div>
  );
};

export default App;
