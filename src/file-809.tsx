import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">Building fullstack applications has never been easier.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold mb-2">Server Side:</h2>
          <pre className="bg-gray-100 p-2 rounded">
            {`Bun.serve({
  static: {
    "/": homepage,
    "/api": apiHandler,
  },
  fetch(req) {
    if (req.url.endsWith("/api/data")) {
      return Response.json({ message: "Hello from the server!" });
    }
    return new Response("Not Found", { status: 404 });
  },
});`}
          </pre>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold mb-2">Client Side:</h2>
          <pre className="bg-gray-100 p-2 rounded">
            {`document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/data")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
});`}
          </pre>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-sm text-gray-500">Built with ❤️ using Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
