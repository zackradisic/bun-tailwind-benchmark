import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">Building fullstack applications has never been this easy and efficient.</p>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Server</h2>
          <p className="text-gray-600">Easily handle API requests with asynchronous functions.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-600">Render dynamic components using React.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Integration</h2>
          <p className="text-gray-600">Seamlessly integrate with Tailwind CSS.</p>
        </div>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">Get Started</button>
    </div>
  );
}

export default App;
