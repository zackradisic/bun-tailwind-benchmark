import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-indigo-600 mb-5">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demo of Bun's new fullstack capabilities with React and TypeScript using TailwindCSS for styling.
      </p>
      <div className="flex flex-wrap justify-center">
        <button className="px-4 py-2 m-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition">
          Click Me
        </button>
        <button className="px-4 py-2 m-2 text-white bg-green-500 rounded hover:bg-green-700 transition">
          Another Button
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl text-gray-800">Server Response:</h2>
        <pre className="p-4 bg-white border rounded shadow mt-2">
          {/* This is where the server response data would be displayed */}
          <code className="text-sm text-gray-600">{"Fetch data from server here..."}</code>
        </pre>
      </div>
    </div>
  );
};

export default App;
