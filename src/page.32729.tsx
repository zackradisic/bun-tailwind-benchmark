import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Bun + Tailwind Integration!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is an example of a fullstack application using Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server-Side</h2>
          <p className="text-gray-600">Handle API requests with:</p>
          <pre className="bg-gray-100 p-2 rounded">
            {`async fetch(req) {
  if (req.url.endsWith("/api/data")) {
    return Response.json({ message: "Hello from the server!" });
  }
  return new Response("Not Found", { status: 404 });
}`}
          </pre>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Client-Side</h2>
          <p className="text-gray-600">Render the app using:</p>
          <pre className="bg-gray-100 p-2 rounded">
            {`document.addEventListener("DOMContentLoaded", () => {
  createRoot(document.getElementById("root")).render(<App />);
});`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
