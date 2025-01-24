import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full py-6 shadow">
        <h1 className="text-white text-3xl font-bold text-center">Welcome to Bun + Tailwind!</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Get Started with Your Fullstack App</h2>
          <p className="text-gray-600 mb-4">
            This component showcases just how fast and simple it is to build fullstack applications using Bun with React and TypeScript! 
          </p>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-200">
            Click Me
          </button>
        </section>
        <footer className="mt-10 text-gray-500">
          <p>&copy; 2023 Your Company</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
