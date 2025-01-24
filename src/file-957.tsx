export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8 animate-pulse">
            Bun Fullstack Magic ✨
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl transform hover:scale-105 transition-all">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h2 className="text-2xl font-bold">Server Side</h2>
              </div>
              
              <pre className="bg-gray-900 rounded-lg p-4 text-sm text-green-400 overflow-x-auto">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.endsWith("/api/speed")) {
      return Response.json({
        speed: "blazingly fast" 
      });
    }
  }
})`}
              </pre>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 shadow-xl transform hover:scale-105 transition-all">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 className="text-2xl font-bold">Client Side</h2>
              </div>

              <pre className="bg-gray-900 rounded-lg p-4 text-sm text-blue-400 overflow-x-auto">
                {`// frontend.tsx
import { createRoot } from "react-dom/client";

const root = createRoot(
  document.getElementById("root")
);
root.render(<App />);`}
              </pre>
            </div>
          </div>

          <div className="mt-16 inline-flex items-center justify-center space-x-4">
            <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
            <span className="text-lg font-semibold">Just run <code className="bg-gray-800 px-2 py-1 rounded">bun run app.ts</code></span>
          </div>
        </div>
      </div>
    </div>
  );
}
