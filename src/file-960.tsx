import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Bun + Tailwind Demo</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Fullstack with Bun</h2>
          <p className="text-gray-700 mb-4">
            This is a simple demo to show how fast and easy it is to build fullstack applications with Bun, React, and Tailwind.
          </p>
          <button
            onClick={async () => {
              const response = await fetch("/api/users");
              const users = await response.json();
              console.log(users);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Fetch Users
          </button>
        </div>
      </main>
      <footer className="mt-10">
        <p className="text-gray-500">Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
