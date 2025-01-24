import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 w-full p-4 shadow-lg">
        <h1 className="text-white text-3xl font-bold">Welcome to Bun with Tailwind</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Fullstack Development Made Easy</h2>
          <p className="text-gray-600 mb-4">
            Build applications with Bun, TypeScript, and Tailwind CSS effortlessly. 
            Here are a few features you'll love:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li className="text-gray-600">Fast Local Development</li>
            <li className="text-gray-600">Easy Integration with Tailwind</li>
            <li className="text-gray-600">Seamless Backend and Frontend Setup</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </main>
      <footer className="mt-10 p-4 text-center text-gray-500">
        <p>&copy; 2023 Bun Fullstack Tutorials</p>
      </footer>
    </div>
  );
};

export default App;
