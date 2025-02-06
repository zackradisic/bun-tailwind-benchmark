import "./style.css";
export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <img src="https://bun.sh/logo.svg" className="w-16 h-16 animate-spin-slow" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Bun Fullstack
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <div className="px-4 py-2 bg-green-500/10 rounded-full text-green-500 text-sm font-mono">
              Server Running
            </div>
            <div className="px-4 py-2 bg-blue-500/10 rounded-full text-blue-500 text-sm font-mono">
              Client Connected
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="rounded-xl bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold mb-4 text-pink-500">Server Code</h2>
            <pre className="bg-black/30 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  development: true,
  async fetch(req) {
    if (req.url.endsWith("/api")) {
      return Response.json({
        speed: "ultrafast"
      });
    }
  }
})`}
            </pre>
          </div>

          <div className="rounded-xl bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold mb-4 text-violet-500">Client Code</h2>
            <pre className="bg-black/30 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              {`import {createRoot} from "react-dom/client";

const root = createRoot(
  document.getElementById("root")
);
root.render(<App />);`}
            </pre>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-white/5 backdrop-blur">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-blue-500">Live Preview</h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Live
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Welcome to Bun</h3>
              <p className="text-gray-400">The all-in-one JavaScript runtime & toolkit</p>
              <button className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
