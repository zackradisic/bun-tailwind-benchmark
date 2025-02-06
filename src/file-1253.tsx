import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/speeds")
      .then(r => r.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Bun Fullstack Power
          </h1>
          <div className="animate-bounce">
            <span className="text-4xl">🚀</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-pink-500/50 transition-all">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-pink-500">⚡️</span> Server Side
            </h2>
            <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto text-sm">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    const data = await db.query()
    return Response.json(data)
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-violet-500/50 transition-all">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-violet-500">🎨</span> Client Side
            </h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : (
                <div className="space-y-2">
                  {data.map((item, i) => (
                    <div key={i} className="bg-gray-900/50 p-3 rounded-lg">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">Powered by Bun</span>
          </div>
        </div>
      </div>
    </div>
  );
}
