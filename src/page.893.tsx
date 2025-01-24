import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4">
        <h1 className="text-3xl font-bold">My Bun Fullstack App</h1>
      </header>
      <main className="flex flex-col items-center mt-8">
        <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Welcome to Bun!</h2>
          <p className="text-gray-700 mb-4">
            This is a fullstack application with React and TypeScript, showcasing Bun and TailwindCSS.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
            Click Me!
          </button>
        </section>
        <div className="mt-8 flex flex-col items-center space-y-4">
          <p className="text-gray-600">Fetching Data from the Server...</p>
          <div className="border border-gray-300 rounded-md p-4 w-full bg-gray-50">
            {/* Simulated API call response */}
            <p className="text-center">👨‍💻 API Response: Hello from the server!</p>
          </div>
        </div>
      </main>
      <footer className="mt-8 text-gray-600 text-sm">
        <p>Built with 💙 using Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
