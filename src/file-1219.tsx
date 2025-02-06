import "./style.css";
export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack
          </h1>
          <p className="text-xl text-gray-400 mt-4">Lightning fast fullstack apps with React & TypeScript</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Server Side</h2>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`import dashboard from "./dashboard.html";

Bun.serve({
  static: {
    "/": dashboard
  },
  
  async fetch(req) {
    if (req.url.endsWith("/api/data")) {
      return Response.json({
        message: "Hello from Bun!" 
      });
    }
  }
});`}
              </code>
            </pre>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Client Side</h2>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`import { createRoot } from "react-dom/client";

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(
    document.getElementById("root")
  );
  root.render(<App />);
});`}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Features</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Zero Config Setup",
              "TypeScript First",
              "Built-in Bundler",
              "Fast HMR",
              "Asset Optimization",
              "Production Ready"
            ].map((feature) => (
              <li key={feature} className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">Just run</p>
          <div className="bg-gray-900 rounded-lg p-4 mt-2 inline-block">
            <code className="text-purple-400">$ bun run dev</code>
          </div>
        </div>
      </div>
    </div>
  );
}
