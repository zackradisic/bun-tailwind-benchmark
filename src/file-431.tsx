import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())
      .then(setData)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/bun.svg" className="w-16 h-16 animate-bounce" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-500 font-mono">Server Running</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-pink-500">⚡</span> Server
            </h2>
            <pre className="font-mono text-sm bg-black/50 p-4 rounded-lg overflow-x-auto">
              {`Bun.serve({
  static: {
    "/": page
  },
  fetch(req) {
    if(req.url.endsWith("/api/data")) {
      return Response.json(["Fast", "Simple", "Modern"]);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-violet-500">⚛️</span> Client
            </h2>
            <div className="space-y-4">
              <div className="animate-pulse bg-black/50 rounded-lg p-4">
                {isLoading ? (
                  <div className="h-8 w-32 bg-white/20 rounded" />
                ) : (
                  <ul className="list-disc list-inside">
                    {data.map((item, i) => (
                      <li key={i} className="text-lg font-semibold">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-white/60">
          <p className="text-sm">
            Built with Bun {Bun.version} • React • TypeScript • Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
