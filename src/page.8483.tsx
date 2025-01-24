import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack apps has never been this easy and fast!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-500">Client Side</h2>
          <p className="mt-2 text-gray-600">Our React component makes use of Tailwind for styling. Everything is hot-reloaded seamlessly using Bun!</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-500">Server Side</h2>
          <p className="mt-2 text-gray-600">Bun's server makes API fetching a breeze! Here’s how easy it is to handle requests:</p>
          <pre className="mt-2 bg-gray-200 p-2 rounded text-sm">
            {`async fetch(req) {
  // Example API endpoint
  if (req.url.endsWith("/api/data")) {
    const data = await fetchSomeData();
    return Response.json(data);
  }
  return new Response("Not Found", { status: 404 });
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
