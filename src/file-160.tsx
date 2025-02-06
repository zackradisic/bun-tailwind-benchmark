import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
        <p className="text-xl text-gray-700">Experience the speed of fullstack development</p>
      </header>
      <main className="flex flex-col items-center space-y-4">
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold">Server Response</h2>
          <p className="text-gray-600">Fetching data from the server...</p>
          {/* Example fetch call */}
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Fetch Data
          </button>
        </div>
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold">API Action</h2>
          <p className="text-gray-600">Trigger an action with our API:</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Trigger API
          </button>
        </div>
      </main>
      <footer className="mt-8">
        <p className="text-gray-500">Made with ❤️ using Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
