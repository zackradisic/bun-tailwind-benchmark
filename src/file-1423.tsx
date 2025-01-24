import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <header className="bg-white shadow-md w-full p-5">
        <h1 className="text-3xl font-bold text-center text-blue-600">Welcome to Bun with TailwindCSS</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Fast Fullstack Development</h2>
          <p className="text-gray-700 mb-6">
            Build your fullstack applications effortlessly with Bun and TailwindCSS. Experience the speed and simplicity!
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Get Started
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white w-full p-3 text-center">
        <p>Powered by Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
