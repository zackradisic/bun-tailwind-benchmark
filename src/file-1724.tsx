import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun + Tailwind + React</h1>
      <p className="text-lg text-gray-700 mb-6">Building fullstack applications has never been easier with Bun!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-green-500">Server Side</h2>
          <p className="text-gray-600">
            API requests handled seamlessly using:
            <pre className="bg-gray-200 p-2 rounded-md mt-2">Bun.serve({`{ fetch (req) { ... } }`})</pre>
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-orange-500">Client Side</h2>
          <p className="text-gray-600">
            Rendered with:
            <pre className="bg-gray-200 p-2 rounded-md mt-2">ReactDOM.createRoot(document.getElementById("root")).render()</pre>
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-purple-500">Tailwind CSS</h2>
          <p className="text-gray-600">
            Styling with:
            <pre className="bg-gray-200 p-2 rounded-md mt-2">Utility classes</pre>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
