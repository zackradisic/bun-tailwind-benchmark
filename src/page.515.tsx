import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="p-4 bg-blue-600 text-white text-2xl font-bold rounded-t-lg w-full text-center">
        Welcome to Our Fullstack App
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
          <h2 className="text-xl font-semibold mb-4">Server and Client Interaction</h2>
          <p className="text-gray-700 mb-4">
            This is an example of how fast and simple it is to use Bun with Tailwind CSS in a fullstack application.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Fetch Data
          </button>
        </div>
      </main>
      <footer className="p-4 bg-gray-300 rounded-b-lg w-full text-center text-sm">
        Powered by Bun and Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
