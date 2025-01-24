import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full py-4 shadow-md">
        <h1 className="text-3xl text-white text-center">Bun + TailwindCSS App</h1>
      </header>
      <main className="flex-1 w-full max-w-lg p-4 space-y-4">
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Client Part</h2>
          <p className="text-gray-600">
            This section showcases how easy it is to structure a React component with multiple Tailwind utility classes.
          </p>
          <div className="mt-4">
            <button className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              Click Me
            </button>
          </div>
        </section>
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Server Part</h2>
          <p className="text-gray-600">
            The server is as simple as defining Bun.serve with your HTML and API handlers. 
            Check out how easy it is to integrate Tailwind!
          </p>
        </section>
      </main>
      <footer className="bg-blue-600 w-full py-4">
        <p className="text-center text-white">Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
