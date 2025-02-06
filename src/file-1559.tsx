import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + React + TypeScript</h1>
      <p className="text-lg text-gray-700">Creating fullstack applications has never been easier.</p>
      <button className="mt-5 px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow-lg hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>
      <section className="mt-10 p-5 bg-white shadow-md rounded-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Response:</h2>
        <div className="p-4 bg-blue-50 rounded border border-blue-200">
          <p className="text-blue-600">Fetching data from server...</p>
        </div>
      </section>
    </div>
  );
};

export default App;
