import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-4 text-center shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to My Bun + Tailwind App!</h1>
      </header>
      <main className="flex-1 w-full p-10">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Server-Client Setup</h2>
          <p className="text-gray-700 mb-4">
            Using Bun's powerful bundling capabilities, you get server-side rendering and client-side interactivity with ease.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Click Me!
          </button>
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center py-2">
        <p>&copy; 2023 My Bun Application</p>
      </footer>
    </div>
  );
};

export default App;
