import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">This is a fullstack app using React, TypeScript, and Tailwind CSS.</p>
      <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
        Click Me
      </button>
      <div className="mt-10 flex space-x-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold">Server Side</h2>
          <pre className="mt-2 text-sm text-gray-600">
{`async fetch(req) {
  if (req.url.endsWith("/api/data")) {
    return Response.json({ message: "Data from Bun server" });
  }
  return new Response("Not Found", { status: 404 });
}`}
          </pre>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold">Client Side</h2>
          <pre className="mt-2 text-sm text-gray-600">
{`const response = await fetch('/api/data');
const data = await response.json();
console.log(data.message);`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
