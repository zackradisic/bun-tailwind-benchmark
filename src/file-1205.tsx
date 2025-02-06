import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverTime, setServerTime] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/time')
      .then(res => res.text())
      .then(time => {
        setServerTime(time);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10">
            <h1 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x mb-8">
              Bun Fullstack React
            </h1>

            <div className="space-y-6">
              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-pink-400">Server Side</h2>
                <div className="font-mono bg-black/40 p-4 rounded-lg">
                  <pre className="text-green-400">
                    {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/time")) {
      return new Response(new Date().toISOString())
    }
  }
})`}
                  </pre>
                </div>
              </div>

              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-indigo-400">Client Side</h2>
                <div className="bg-black/40 p-4 rounded-lg">
                  <p className="text-gray-300 mb-2">Server Time:</p>
                  {loading ? (
                    <div className="animate-pulse h-6 w-48 bg-white/10 rounded"></div>
                  ) : (
                    <p className="font-mono text-yellow-400">{serverTime}</p>
                  )}
                </div>
              </div>

            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">Powered by</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="px-3 py-1 bg-white/5 rounded-full text-sm font-semibold">Bun</div>
                <div className="px-3 py-1 bg-white/5 rounded-full text-sm font-semibold">React</div>
                <div className="px-3 py-1 bg-white/5 rounded-full text-sm font-semibold">TypeScript</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
