export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Bun Fullstack
          </h1>
          <p className="text-xl text-gray-300">Lightning fast React + TypeScript development</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-pink-500 transition-colors">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Server-side
            </h2>
            <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
              <code className="text-gray-300">
{`Bun.serve({
  static: {
    "/": homepage
  },
  development: true,
  async fetch(req) {
    if (req.url.endsWith("/api")) {
      return Response.json({
        speed: "blazingly fast"
      })
    }
  }
})`}
              </code>
            </pre>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-violet-500 transition-colors">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Client-side
            </h2>
            <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
              <code className="text-gray-300">
{`// frontend.tsx
import { createRoot } from "react-dom/client";

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

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Just run <code className="bg-gray-800 px-2 py-1 rounded">bun run app.ts</code> and you're ready to go!
          </p>
        </div>
      </div>
    </div>
  )
}
