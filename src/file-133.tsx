import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications with React & TypeScript has never been easier.</p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
        Get Started
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <section className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2">Client-Side</h2>
          <p className="mt-4 text-gray-600">Rendering UI components efficiently with the power of React.</p>
        </section>
        <section className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2">Server-Side</h2>
          <p className="mt-4 text-gray-600">Seamlessly handle API requests with Bun's built-in server capabilities.</p>
        </section>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>&copy; 2023 Bun & React</p>
      </footer>
    </div>
  );
};

export default App;
