import "./style.css";
export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <img src="https://bun.sh/logo.svg" className="h-12 w-12" alt="Bun logo" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 font-mono text-sm">
              Server Running
            </div>
            <div className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-mono text-sm">
              Client Connected
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              Server Code
            </h2>
            <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    const users = await 
      Bun.sql\`SELECT * FROM users\`;
    return Response.json(users);
  }
})`}
            </pre>
          </div>

          <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              Client Code
            </h2>
            <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
              {`import { createRoot } from "react-dom/client";
import { App } from "./app";

createRoot(document.getElementById("root"))
  .render(<App />);`}
            </pre>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-gray-800/50 p-6 backdrop-blur border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Development Features</h2>
            <div className="px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 font-mono text-sm">
              development: true
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {[
              "Hot Reloading",
              "Source Maps",
              "TypeScript",
              "Asset Bundling",
              "Fast Refresh",
              "Zero Config"
            ].map(feature => (
              <div key={feature} className="flex items-center gap-2 text-gray-300">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
