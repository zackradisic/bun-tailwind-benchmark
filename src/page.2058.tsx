import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun & Tailwind Demo</h1>
      <p className="text-lg text-gray-700 mb-6">This is how easy it is to build fullstack apps!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-green-500">Client Component</h2>
          <p className="text-gray-600">This part runs on the client side using React and Tailwind CSS.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-orange-500">Server Component</h2>
          <p className="text-gray-600">This part is handled by Bun on the server side.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-purple-500">API Interaction</h2>
          <p className="text-gray-600">Fetch data seamlessly with Bun's powerful API routes.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
