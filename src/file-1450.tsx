import { useEffect, useState } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack Magic ✨
            </h1>
            <p className="mt-2 text-gray-400">Server + Client in one file, blazingly fast</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-violet-600 rounded-full text-sm font-medium animate-pulse">
              Powered by Bun
            </div>
            <div className="px-4 py-2 bg-pink-600 rounded-full text-sm font-medium">
              {isLoading ? "Loading..." : `${data.length} items`}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-emerald-400">⚡️</span> Server Component
            </h2>
            <pre className="bg-black/30 p-4 rounded-lg text-sm font-mono text-emerald-300 overflow-x-auto">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch(req) {
    if(req.url.endsWith("/api/data")) {
      return Response.json(["Bun", "is", "fast"]);
    }
  }
})`}
            </pre>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-sky-400">🚀</span> Client Component
            </h2>
            <div className="space-y-3">
              {isLoading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              ) : (
                data.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-gray-700/30 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                    <span>{item}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Built with Tailwind CSS + TypeScript + React
        </div>
      </div>
    </div>
  );
}
