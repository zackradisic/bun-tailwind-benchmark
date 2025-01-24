import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 w-full text-center shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to Bun's Fullstack App!</h1>
      </header>
      <main className="flex flex-col items-center mt-8">
        <section className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Client-Side Features</h2>
          <p className="text-gray-700 mb-2">
            This section demonstrates how seamlessly you can integrate React with Bun, using Tailwind CSS for styling.
          </p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            Click Me!
          </button>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6 mt-6 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Server-Side Features</h2>
          <p className="text-gray-700 mb-2">
            Make async API requests with ease:
          </p>
          <code className="bg-gray-200 text-gray-800 p-2 rounded-md">
            {`fetch('/api/users').then(res => res.json()).then(users => console.log(users));`}
          </code>
        </section>
      </main>
    </div>
  );
};

export default App;
