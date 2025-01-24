export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-4">
            Bun Fullstack
          </h1>
          <p className="text-xl text-gray-400">Build React apps at lightspeed ⚡️</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="h-4 w-4 rounded-full bg-red-500 mr-2"/>
              <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"/>
              <div className="h-4 w-4 rounded-full bg-green-500"/>
            </div>
            <h2 className="text-xl font-semibold mb-4">Server Code</h2>
            <pre className="bg-gray-900 rounded p-4 overflow-x-auto">
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
        users: 1000,
        requests: "1M+"
      });
    }
  }
});`}
              </code>
            </pre>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="h-4 w-4 rounded-full bg-red-500 mr-2"/>
              <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"/> 
              <div className="h-4 w-4 rounded-full bg-green-500"/>
            </div>
            <h2 className="text-xl font-semibold mb-4">Client Code</h2>
            <pre className="bg-gray-900 rounded p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`import { createRoot } from "react-dom/client";
import "./styles.css";

const App = () => (
  <div className="p-8">
    <h1>Dashboard</h1>
    {/* Your React components */}
  </div>
);

createRoot(document.getElementById("root"))
  .render(<App />);`}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Features</h2>
            <div className="animate-pulse flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500"/>
              <div className="h-2 w-2 rounded-full bg-green-500"/>
              <div className="h-2 w-2 rounded-full bg-green-500"/>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <div className="text-purple-400 text-lg mb-2">Fast Bundling</div>
              <p className="text-sm text-gray-400">Native bundler with blazing speed</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <div className="text-purple-400 text-lg mb-2">TypeScript First</div>
              <p className="text-sm text-gray-400">Built-in TS support, no config needed</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <div className="text-purple-400 text-lg mb-2">Development Mode</div>
              <p className="text-sm text-gray-400">Hot reloading & detailed errors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
