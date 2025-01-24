import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun & Tailwind!</h1>
      </header>
      <main className="flex flex-col items-center mt-4">
        <section className="bg-white shadow-md rounded-lg p-8 max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Fast Fullstack Development</h2>
          <p className="text-gray-700 mb-4">
            Build and run your fullstack applications using Bun with React and TypeScript effortlessly!
          </p>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 transition">
            Get Started
          </button>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-semibold">API Data:</h3>
          <pre className="bg-gray-200 p-4 rounded mt-2 overflow-x-auto">
            {`{
  "status": "success",
  "data": {
    "message": "API is running smoothly!"
  }
}`}
          </pre>
        </section>
      </main>
    </div>
  );
};

export default App;
