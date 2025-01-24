import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(items => {
        setData(items);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-4">
            <img src="/bun.svg" className="h-16 w-16 animate-bounce" alt="Bun logo" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>

          <div className="w-full max-w-3xl bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-pink-400">Server Code</h2>
                <span className="px-3 py-1 text-xs font-medium bg-pink-500/20 text-pink-400 rounded-full">
                  Bun.serve()
                </span>
              </div>
              <pre className="bg-black/50 rounded-lg p-4 text-sm font-mono text-gray-300 overflow-x-auto">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.endsWith("/api/data")) {
      return Response.json(["Fast", "Simple", "Modern"]);
    }
  }
})`}
              </pre>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-violet-400">Client Response</h2>
                <span className="px-3 py-1 text-xs font-medium bg-violet-500/20 text-violet-400 rounded-full">
                  React + TypeScript
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {loading ? (
                  <div className="col-span-3 flex justify-center">
                    <div className="animate-spin h-8 w-8 border-4 border-violet-500 rounded-full border-t-transparent" />
                  </div>
                ) : (
                  data.map((item, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-6 transform hover:scale-105 transition-transform">
                      <h3 className="text-xl font-medium text-center">{item}</h3>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-center max-w-xl">
            Bun makes it incredibly easy to build modern full-stack applications with built-in bundling, 
            TypeScript support, and blazing fast performance.
          </p>
        </div>
      </div>
    </div>
  );
}
