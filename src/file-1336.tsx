import "./style.css";
export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Bun Fullstack App
          </h1>
          <div className="animate-bounce">
            <span className="text-xl">🚀</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-pink-400">Server Side</h2>
            <div className="bg-gray-900 rounded p-4 font-mono text-sm">
              <pre className="whitespace-pre-wrap">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.endsWith("/api")) {
      return Response.json({
        message: "Blazingly Fast!" 
      });
    }
  }
})`}
              </pre>
            </div>
            <div className="mt-4 text-gray-300">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✨</span>
                  Built-in bundling
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚡️</span>
                  Lightning fast responses
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔄</span>
                  Hot reloading
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-xl transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-violet-400">Client Side</h2>
            <div className="bg-gray-900 rounded p-4 font-mono text-sm">
              <pre className="whitespace-pre-wrap">
                {`// frontend.tsx
import { createRoot } from "react-dom/client";

const root = createRoot(
  document.getElementById("root")!
);
root.render(<App />);`}
              </pre>
            </div>
            <div className="mt-4 text-gray-300">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">🎨</span>
                  TailwindCSS Support
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📦</span>
                  Automatic bundling
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔥</span>
                  TypeScript & React
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-medium shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            Get Started with Bun
          </span>
        </div>
      </div>
    </div>
  );
}
