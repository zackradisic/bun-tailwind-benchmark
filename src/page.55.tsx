export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <img src="https://bun.sh/logo.svg" className="w-12 h-12" alt="Bun logo" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Bun Fullstack
            </h1>
          </div>
          <div className="animate-bounce bg-green-400 rounded-full w-3 h-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg bg-gray-800 p-6 border border-gray-700 hover:border-pink-500 transition-colors">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-pink-500 flex items-center justify-center">🚀</div>
              Server
            </h2>
            <pre className="bg-black/50 rounded p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`Bun.serve({
  static: {
    "/": homepage,
    "/dashboard": dashboard
  },
  
  async fetch(req) {
    if (req.url.endsWith("/api/data")) {
      return Response.json({
        speed: "blazingly fast"
      });
    }
  }
})`}
              </code>
            </pre>
          </div>

          <div className="rounded-lg bg-gray-800 p-6 border border-gray-700 hover:border-violet-500 transition-colors">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-violet-500 flex items-center justify-center">⚛️</div>
              Client
            </h2>
            <pre className="bg-black/50 rounded p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`// frontend.tsx
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root"))
  .render(<App />);

// index.html  
<div id="root" />
<script type="module" src="./frontend.tsx" />`}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block animate-spin text-4xl mb-4">⚡</div>
          <p className="text-gray-400">Just import, serve, and you're ready to go!</p>
        </div>
      </div>
    </div>
  );
}
