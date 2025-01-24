import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-4 shadow">
        <h1 className="text-3xl font-bold text-center">Bun & Tailwind Integration Demo</h1>
      </header>
      <main className="flex flex-col items-center p-8">
        <section className="bg-white shadow-md rounded-lg p-6 mb-8 w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Welcome to Bun</h2>
          <p className="text-gray-700 mb-4">
            This is a React application powered by Bun and Tailwind CSS. Enjoy building fullstack apps with unparalleled speed!
          </p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </section>

        <section className="flex flex-col items-center">
          <label className="mb-2 text-lg font-medium text-gray-800">Interact with the API:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 mb-4 w-64"
            placeholder="Type something..."
          />
          <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
            Submit
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
