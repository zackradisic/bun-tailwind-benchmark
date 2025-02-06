import "./style.css";
export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack Demo
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Build React apps lightning fast with Bun's built-in bundler
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl transform hover:-translate-y-1 transition">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold">Client Side</h2>
            </div>
            <pre className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
              {`import "./styles.css";
import { createRoot } from "react-dom/client";
import { App } from "./app";

createRoot(document.getElementById("root"))
  .render(<App />);`}
            </pre>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 shadow-xl transform hover:-translate-y-1 transition">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold">Server Side</h2>
            </div>
            <pre className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
              {`import dashboard from "./dashboard.html";

Bun.serve({
  static: {
    "/": dashboard,
  },
  development: true,
  async fetch(req) {
    if (req.url.endsWith("/api")) {
      return Response.json({
        message: "Hello from Bun!"
      });
    }
  }
});`}
            </pre>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-medium transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start Building with Bun
          </div>
        </div>
      </div>
    </div>
  )
}
