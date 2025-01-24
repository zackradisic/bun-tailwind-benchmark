import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/speed")
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/bun.svg" className="w-12 h-12 animate-spin-slow" alt="Bun logo" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="px-4 py-2 bg-pink-500/10 rounded-full text-pink-500 text-sm font-mono">
            npm i bun
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-pink-500">Server</h2>
              <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
                {`Bun.serve({
  static: {
    "/": html
  },
  fetch(req) {
    return Response.json({
      speed: "blazingly fast"
    })
  }
})`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-violet-500">Client</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-white/10 rounded w-3/4"></div>
                </div>
              ) : (
                <div className="font-mono text-sm">
                  {data.map((item, i) => (
                    <div key={i} className="text-gray-300">{item}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4 items-center justify-center">
          <div className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors cursor-pointer">
            Get Started
          </div>
          <div className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
            Documentation
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          Built with Bun + React + Tailwind
        </div>
      </div>
    </div>
  );
}
