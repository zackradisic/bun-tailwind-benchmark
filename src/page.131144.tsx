import React, { useState } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: '' });
  const [loading, setLoading] = useState(false);

  const fetchServerData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setServerData(data);
    } catch (error) {
      console.error('Failed to fetch:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-8">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white/80 mb-4">Client Side</h2>
            <button 
              onClick={fetchServerData}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all active:scale-95 mb-4"
            >
              {loading ? 'Fetching...' : 'Fetch Server Data'}
            </button>
            {serverData.message && (
              <div className="bg-green-500/20 p-4 rounded-lg text-green-200">
                Server Response: {serverData.message}
              </div>
            )}
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white/80 mb-4">Server Side</h2>
            <pre className="text-sm text-white/70 bg-black/20 p-4 rounded-lg overflow-x-auto">
              {`
// Bun Server Example
Bun.serve({
  async fetch(req) {
    if (req.url.includes('/api/hello')) {
      return Response.json({
        message: 'Hello from Bun! 🚀'
      });
    }
  }
})
              `.trim()}
            </pre>
          </div>
        </div>
      </div>

      <div className="text-center text-white/60 text-sm flex space-x-4">
        <span>🔥 React</span>
        <span>🚀 Bun</span>
        <span>💨 TypeScript</span>
        <span>🌈 Tailwind</span>
      </div>
    </div>
  );
}
