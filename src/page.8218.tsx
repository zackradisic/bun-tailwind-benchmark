import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">Easily build your fullstack app!</p>
      <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Bun Server Response:</h2>
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow">
          <pre className="text-gray-600">
            {`{
  message: "Hello from the server!",
  status: "success"
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
