import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application built with React, TypeScript, and Tailwind CSS.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 max-w-sm mx-auto bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Server</h2>
          <p className="text-gray-600">Fetch data easily with Bun's built-in API capabilities.</p>
          <pre className="bg-gray-100 p-4 rounded mt-2">
            <code>
              {`async fetch(req) {
                if (req.url.endsWith("/api/data")) {
                  const data = await fetchData();
                  return Response.json(data);
                }
                return new Response("Not Found", { status: 404 });
              }`}
            </code>
          </pre>
        </div>
        <div className="p-6 max-w-sm mx-auto bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Client</h2>
          <p className="text-gray-600">Render components efficiently with React.</p>
          <pre className="bg-gray-100 p-4 rounded mt-2">
            <code>
              {`const response = await fetch('/api/data');`}
            </code>
          </pre>
        </div>
      </div>
      <footer className="mt-10 text-gray-600 text-center">
        <p>Powered by <span className="font-bold text-blue-500">Bun</span></p>
      </footer>
    </div>
  );
};

export default App;
