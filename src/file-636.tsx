import React from 'react';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-10">This is a fullstack application showcasing Bun's speed and simplicity.</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Click Me
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-green-500">Server Response:</h2>
        <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md mt-2">
          <pre className="text-gray-800">
            {/* This should be a dynamic response from the server */}
            {"{"}
            <br />
            &nbsp;&nbsp;"status": "success",<br />
            &nbsp;&nbsp;"message": "Hello from Bun API!"<br />
            {"}"}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
