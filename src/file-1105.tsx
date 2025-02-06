import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Client Code</h2>
          <pre className="bg-gray-200 p-4 text-gray-800 overflow-x-auto">
            {`import { createRoot } from 'react-dom/client';
import App from './App';

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
});`}
          </pre>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Server Code</h2>
          <pre className="bg-gray-200 p-4 text-gray-800 overflow-x-auto">
            {`import { serve } from 'bun';

serve({
  fetch(req) {
    if (req.url.endsWith("/api/data")) {
      return new Response(JSON.stringify({ message: "Hello from the server!" }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response("Not Found", { status: 404 });
  },
});`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
