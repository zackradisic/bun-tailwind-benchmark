import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/speed')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <img src="/bun.svg" className="w-16 h-16 animate-bounce" alt="Bun logo" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="px-4 py-2 bg-pink-500/10 rounded-full text-pink-400 text-sm font-mono">
            $ bun run start
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="rounded-xl bg-gray-800/50 p-6 border border-gray-700 backdrop-blur">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              Server
            </h2>
            <pre className="font-mono text-sm text-gray-400 bg-black/30 p-4 rounded-lg">
              {`import dashboard from "./dashboard.html";

Bun.serve({
  static: {
    "/": dashboard
  },
  development: true,
  fetch(req) {
    if (req.url.endsWith("/api/speed")) {
      return Response.json(["Fast", "Simple", "TypeScript"]);
    }
  }
});`}
            </pre>
          </div>

          <div className="rounded-xl bg-gray-800/50 p-6 border border-gray-700 backdrop-blur">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
              Client
            </h2>
            {loading ? (
              <div className="flex items-center justify-center h-[180px]">
                <div className="w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
              </div>
            ) : (
              <ul className="space-y-3">
                {data.map((item, i) => (
                  <li
                    key={i}
                    className="bg-black/20 px-4 py-3 rounded-lg text-lg font-medium flex items-center gap-3"
                  >
                    <span className="text-2xl">🚀</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          Built with Bun + React + TypeScript + Tailwind
        </div>
      </div>
    </div>
  );
}
