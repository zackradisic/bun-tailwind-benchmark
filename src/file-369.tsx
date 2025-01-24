import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-3xl font-bold">My Bun & Tailwind App</h1>
      </header>
      <main className="flex-grow p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Client-Side Rendering</h2>
            <p className="mt-2 text-gray-700">
              This section showcases how simple it is to create client-side rendered components using Bun with Tailwind CSS.
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Click Me!
            </button>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Server API Example</h2>
            <p className="mt-2 text-gray-700">
              Our APIs can be easily set up to handle requests and responses with Bun.
              Make an API call to fetch data effortlessly.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-blue-500 p-4">
        <p className="text-white text-center">© 2023 My Bun App</p>
      </footer>
    </div>
  );
};

export default App;
