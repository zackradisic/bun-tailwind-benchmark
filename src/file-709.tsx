import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 my-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications is super easy!</p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
        Click me!
      </button>
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">Fetch Data from Server</h2>
        <div className="mt-4">
          <pre className="bg-gray-200 p-4 rounded overflow-x-auto">
            {`async function fetchData() {
  const response = await fetch('/api/users');
  const data = await response.json();
  console.log(data);
}`}
          </pre>
        </div>
        <button 
          className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition"
          onClick={fetchData}>
          Load Users
        </button>
      </div>
    </div>
  );
}

export default App;
