import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack app with React and TypeScript!</p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>
      <div className="mt-10 flex items-center space-x-4">
        <div className="p-5 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Server Response:</h2>
          <pre className="text-gray-600">Fetching data from /api/users</pre>
        </div>
        <div className="p-5 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Client Interaction:</h2>
          <pre className="text-gray-600">Handle your client-side logic here.</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
