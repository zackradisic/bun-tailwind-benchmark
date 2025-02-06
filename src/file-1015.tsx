import "./style.css";
export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur"></div>
            <div className="relative rounded-lg bg-black px-8 py-6">
              <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-6xl font-bold text-transparent">
                Bun Fullstack
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Server Side */}
            <div className="rounded-xl bg-gray-800 p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-4">
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-green-400">
                  {`Bun.serve({
  static: {
    "/": homepage,
  },
  async fetch(req) {
    if (req.url.endsWith("/api/speed")) {
      return Response.json({
        speed: "blazingly fast 🚀"
      });
    }
  }
});`}
                </pre>
              </div>
            </div>

            {/* Client Side */}
            <div className="rounded-xl bg-gray-800 p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-4">
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-pink-400">
                  {`import { createRoot } from "react-dom/client";
import { App } from "./app";

createRoot(document.getElementById("root"))
  .render(<App />);`}
                </pre>
              </div>
            </div>
          </div>

          <div className="flex animate-bounce items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg">
            <span>Zero Config Setup</span>
            <span className="text-2xl">⚡️</span>
          </div>
        </div>
      </div>
    </div>
  );
}
