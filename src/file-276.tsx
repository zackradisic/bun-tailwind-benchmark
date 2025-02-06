import "./style.css";
export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Build Fullstack Apps with Bun 🚀
          </h1>
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Server Running</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">Client Connected</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1 bg-gray-800/50 rounded-lg p-6 border border-gray-700 backdrop-blur">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
              <h2 className="text-xl font-semibold">Server-side Code</h2>
            </div>
            <pre className="bg-gray-900/50 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`import dashboard from "./dashboard.html";

Bun.serve({
  static: {
    "/": dashboard
  },
  development: true,
  async fetch(req) {
    if (req.url.endsWith("/api/stats")) {
      return Response.json({
        uptime: process.uptime(),
        memory: process.memoryUsage()
      });
    }
  }
});`}
              </code>
            </pre>
          </div>

          <div className="col-span-1 bg-gray-800/50 rounded-lg p-6 border border-gray-700 backdrop-blur">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-pink-500 mr-3"></div>
              <h2 className="text-xl font-semibold">Client-side Code</h2>
            </div>
            <pre className="bg-gray-900/50 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

function App() {
  const [stats, setStats] = useState(null);
  
  useEffect(() => {
    fetch("/api/stats")
      .then(res => res.json())
      .then(setStats);
  }, []);

  return (
    <div>{JSON.stringify(stats)}</div>
  );
}

createRoot(document.getElementById("root"))
  .render(<App />);`}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Features</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              "Zero Config Setup",
              "TypeScript Ready",
              "Fast Build Times",
              "Auto Route Generation",
              "Development Mode",
              "Built-in Bundling"
            ].map(feature => (
              <div key={feature} className="flex items-center space-x-2 bg-gray-900/30 rounded-lg p-3">
                <svg className="w-5 h-5 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
