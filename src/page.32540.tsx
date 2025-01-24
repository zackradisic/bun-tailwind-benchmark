import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10">
      <h1 className="text-5xl font-bold mb-5">Welcome to Bun + Tailwind!</h1>
      <p className="text-xl mb-10">
        This is a simple fullstack application showing off the speed and simplicity of using Bun with Tailwind CSS.
      </p>
      <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition">
        Click Me
      </button>
      <div className="w-full max-w-md mt-10">
        <h2 className="text-3xl font-semibold">Server Response:</h2>
        <div id="response" className="mt-3 p-5 bg-white rounded-lg shadow-lg">
          Waiting for server response...
        </div>
      </div>
    </div>
  );
};

export default App;
