import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <header className="bg-white shadow-md rounded p-5 w-full max-w-md">
        <h1 className="text-3xl text-center text-gray-800 font-bold mb-4">
          Welcome to My Bun + Tailwind App
        </h1>
        <p className="text-gray-600 text-center mb-4">
          This is a simple example of using Bun with React and TypeScript.
        </p>
      </header>
      
      <main className="flex flex-col items-center mt-5">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mb-4">
          Click Me!
        </button>

        <section className="bg-white p-5 rounded shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Data from Server:</h2>
          <p className="text-gray-700">Fetching data... (This simulates an API response)</p>
          <pre className="bg-gray-100 p-3 rounded mt-2">
            {/* Example API response */}
            {JSON.stringify({ hello: "world", from: "Bun's API" }, null, 2)}
          </pre>
        </section>
      </main>
      
      <footer className="mt-10">
        <p className="text-gray-500 text-sm">Powered by Bun &amp; Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
