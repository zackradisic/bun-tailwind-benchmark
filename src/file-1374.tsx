import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [latency, setLatency] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = performance.now();
    fetch('/api/data')
      .then(res => res.json())
      .then(json => {
        setLatency(performance.now() - start);
        setData(json);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-8">
            Bun Fullstack Magic ✨
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4">Server Side</h2>
                <pre className="font-mono text-sm bg-black/30 p-4 rounded-lg overflow-x-auto">
                  {`Bun.serve({
  static: {
    "/": html
  },
  fetch: async (req) => {
    return Response.json(data)
  }
})`}
                </pre>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4">Client Side</h2>
                <pre className="font-mono text-sm bg-black/30 p-4 rounded-lg overflow-x-auto">
                  {`import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root'))
  .render(<App />)`}
                </pre>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Live Demo</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-emerald-400">API Latency:</span>
                  <span className="font-mono">{latency.toFixed(2)}ms</span>
                </div>

                <button
                  onClick={async () => {
                    setLoading(true);
                    const res = await fetch('/api/data');
                    const json = await res.json();
                    setData(json);
                    setLoading(false);
                  }}
                  className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
                >
                  {loading ? 'Loading...' : 'Fetch Data'}
                </button>

                <div className="bg-black/30 rounded-lg p-4 h-48 overflow-y-auto">
                  <pre className="font-mono text-sm">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
