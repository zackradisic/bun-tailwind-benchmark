import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to My Bun App</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <section className="bg-white shadow-md rounded-lg p-6 max-w-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Client-Side Component</h2>
          <p className="text-gray-700">This is a simple component rendered with React and TypeScript using Bun!</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Click Me!
          </button>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6 max-w-md">
          <h2 className="text-xl font-semibold mb-2">Server-Side Response</h2>
          <p className="text-gray-700">
            Fetching data from the server...
          </p>
          <div className="mt-4 p-4 border border-gray-300 rounded-md">
            {/* Example of server response as JSON */}
            <pre className="text-sm text-gray-600">{JSON.stringify({ message: 'Hello from Bun server!' }, null, 2)}</pre>
          </div>
        </section>
      </main>
      <footer className="mt-10 text-gray-600">
        <p>Powered by Bun, React, and Tailwind CSS!</p>
      </footer>
    </div>
  );
};

export default App;
