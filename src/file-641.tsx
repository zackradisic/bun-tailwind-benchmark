import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data")
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
          <div className="h-12 w-12 rounded-lg bg-purple-600 animate-pulse" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Bun Fullstack Demo
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <div className="mr-2 h-6 w-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center">
                <span className="animate-ping h-2 w-2 rounded-full bg-green-400" />
              </div>
              Server
            </h2>
            <div className="space-y-3 font-mono text-sm text-gray-300">
              <div className="p-3 rounded bg-black/30">
                Bun.serve({"{"}
                <div className="pl-4">static: {"{"}/: homepage{"}"}</div>
                {"}"})
              </div>
              <div className="p-3 rounded bg-black/30">
                fetch("/api/data") → {loading ? "Loading..." : data.length + " items"}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <div className="mr-2 h-6 w-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <span className="animate-spin h-4 w-4 border-2 border-blue-400 rounded-full border-t-transparent" />
              </div>
              Client
            </h2>
            <div className="space-y-2">
              {loading ? (
                <div className="animate-pulse space-y-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-8 bg-gray-700/50 rounded" />
                  ))}
                </div>
              ) : (
                data.map((item, i) => (
                  <div key={i} className="p-2 rounded bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                    {item}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          Built with Bun {process.version} • Blazingly Fast ⚡️
        </div>
      </div>
    </div>
  );
}
