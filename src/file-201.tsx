import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/messages")
      .then(res => res.json())
      .then(msgs => {
        setData(msgs);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Bun Fullstack Demo
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-white/60 text-sm">Server Running</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Server Code</h2>
              <pre className="text-sm text-emerald-400 font-mono overflow-x-auto">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.includes("/api")) {
      return Response.json(["Hello", "from", "Bun!"]) 
    }
  }
})`}
              </pre>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Client Response</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-white/20 rounded"></div>
                      <div className="h-4 bg-white/20 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {data.map((msg, i) => (
                    <div 
                      key={i}
                      className="text-white/80 font-mono bg-white/5 p-2 rounded"
                    >
                      {msg}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              Built with 
              <span className="text-pink-400 mx-1">Bun</span>
              +
              <span className="text-cyan-400 mx-1">React</span>
              +
              <span className="text-sky-400 mx-1">Tailwind</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
