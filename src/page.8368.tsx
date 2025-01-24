import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-600 mb-10">Building fullstack applications has never been easier.</p>
      <div className="flex flex-row space-x-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-300">
          Client Action
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-600 transition duration-300">
          API Call
        </button>
      </div>
      <div className="mt-10 border-t border-gray-300 pt-4">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <pre className="bg-gray-200 p-4 rounded mt-2">
          {JSON.stringify({ message: "Hello from the server!" }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
