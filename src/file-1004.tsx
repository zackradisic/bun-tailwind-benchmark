import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Bun Fullstack Demo
          </h1>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-mono">Server Active</span>
          </div>
        </div>

        <div className="mt-12 bg-gray-800/50 rounded-lg border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Server Response</h2>
            <div className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-sm">
              Bun HTTP Server
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-40">
              <div className="animate-spin h-8 w-8 border-4 border-violet-500 border-t-transparent rounded-full" />
            </div>
          ) : (
            <div className="space-y-3">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-900/50 p-4 rounded-md border border-gray-700/50 hover:border-violet-500/50 transition-colors"
                >
                  <pre className="font-mono text-sm text-gray-300">{item}</pre>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 bg-gray-800/50 rounded-lg border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Client Info</h2>
            <div className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-sm">
              React + TypeScript
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700/50">
              <p className="text-sm text-gray-400 mb-2">Bundle Size</p>
              <p className="font-mono text-lg">~12kb</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700/50">
              <p className="text-sm text-gray-400 mb-2">Build Time</p>
              <p className="font-mono text-lg">{"<"} 50ms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
