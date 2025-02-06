import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Bun + Tailwind CSS App</h1>
      </header>
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to the Bun Fullstack App</h2>
          <p className="text-gray-700 mb-6">
            This is a demonstration of how fast and simple it is to use Bun to build fullstack applications with React and TypeScript, integrated with Tailwind CSS.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">API Endpoint</h3>
              <pre className="bg-gray-200 p-2 rounded">
                Fetch data from <strong>/api/users</strong>
              </pre>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Client Component</h3>
              <pre className="bg-gray-200 p-2 rounded">
                <code>{`<App /> component renders Tailwind styles effortlessly!`}</code>
              </pre>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>Built with Bun, React, TypeScript, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
