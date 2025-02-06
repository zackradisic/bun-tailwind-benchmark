import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/speed")
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <img src="/bun-logo.svg" className="w-16 h-16 animate-spin-slow" alt="Bun logo" />
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Bun Fullstack
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-pink-400">Server-Side</h2>
            <pre className="bg-black/30 p-4 rounded-lg text-sm overflow-x-auto">
              {`
Bun.serve({
  static: {
    "/": html
  },
  fetch: async (req) => {
    return Response.json(["⚡️ Lightning Fast"])
  }
})
              `}
            </pre>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-violet-400">Client-Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 w-12 bg-gray-700 rounded-full"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {data.map((item, i) => (
                    <li 
                      key={i}
                      className="flex items-center space-x-2 text-lg animate-fade-in"
                    >
                      <span className="w-8 h-8 flex items-center justify-center bg-violet-500/20 rounded-full">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Just run <code className="bg-gray-800 px-2 py-1 rounded">bun run dev</code> and you're ready to go!
          </p>
        </div>
      </div>
    </div>
  );
}
