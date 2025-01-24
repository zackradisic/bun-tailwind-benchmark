import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to Bun & Tailwind!</h1>
        <p className="text-gray-700 text-base mb-6 text-center">
          This is a simple demo showcasing the speed and simplicity of building fullstack applications using
          Bun with React & TypeScript.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="submit"
            value="Submit"
            className="w-full p-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          />
        </form>
        <div className="mt-6">
          <p className="text-sm text-center text-gray-500">Powered by Bun and TailwindCSS</p>
        </div>
      </div>
    </div>
  );
};

export default App;
