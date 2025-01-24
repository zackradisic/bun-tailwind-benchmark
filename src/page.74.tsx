import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverTime, setServerTime] = useState<string>('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getServerTime = async () => {
      const res = await fetch('/api/time');
      const time = await res.text();
      setServerTime(time);
    };
    getServerTime();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-purple-500/20">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bun + React = 🚀
            </h1>
            <p className="text-purple-300 mt-4 text-lg">
              Fullstack TypeScript apps at lightspeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Server-side</h2>
              <div className="space-y-4">
                <code className="block bg-black/30 p-4 rounded-lg text-pink-300 font-mono text-sm">
                  {`Bun.serve({
  fetch(req) {
    return new Response(
      new Date().toLocaleString()
    )
  }
})`}
                </code>
                <div className="text-center p-4 bg-purple-500/10 rounded-lg">
                  Server time: {serverTime || 'Loading...'}
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Client-side</h2>
              <div className="space-y-4">
                <code className="block bg-black/30 p-4 rounded-lg text-pink-300 font-mono text-sm">
                  {`// React + TypeScript
export function App() {
  const [count, setCount] = 
    useState(0)
  //...
}`}
                </code>
                <div className="text-center">
                  <button
                    onClick={() => setCount(c => c + 1)}
                    className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors"
                  >
                    Count: {count}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-purple-300">
            <p className="text-sm">
              Built with Bun's integrated bundler & server - no extra build steps needed! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
