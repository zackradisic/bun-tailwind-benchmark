import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bun with Tailwind CSS!</h1>
      <p className="text-lg mb-8">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Server-side Rendering</h2>
          <p className="text-base">Bun's built-in server allows seamless integration with API routes.</p>
          <pre className="bg-gray-200 p-2 rounded mt-2">
            {`async fetch(req) {
  if (req.url.endsWith("/api/data")) {
    return Response.json({ data: "Hello from the server!" });
  }
  return new Response("Not Found", { status: 404 });
}`}
          </pre>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Client-side Rendering</h2>
          <p className="text-base">Use React to build interactive UIs with ease.</p>
          <pre className="bg-gray-200 p-2 rounded mt-2">
            {`const fetchData = async () => {
  const response = await fetch("/api/data");
  const result = await response.json();
  console.log(result);
};`}
          </pre>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
        Click Me
      </button>
    </div>
  );
};

export default App;
