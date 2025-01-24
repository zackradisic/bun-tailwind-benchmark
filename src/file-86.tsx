import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setServerData(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 max-w-4xl w-full transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 space-y-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Server Side</h2>
            <pre className="text-sm text-white/80 bg-black/20 p-4 rounded-lg overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    // Super fast API routes
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 space-y-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">⚛️ Client Side</h2>
            {loading ? (
              <div className="flex items-center justify-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                <div className="w-4 h-4 bg-white/50 rounded-full"></div>
              </div>
            ) : (
              <div className="bg-white/20 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-white mb-2">Users Fetched</h3>
                <ul className="space-y-2">
                  {serverData.map((user, index) => (
                    <li 
                      key={index} 
                      className="text-white/80 bg-white/10 p-2 rounded-md hover:bg-white/20 transition-all"
                    >
                      {user.name || 'Anonymous User'}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://bun.sh" 
            target="_blank" 
            className="bg-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-all border border-white/30 inline-block"
          >
            Learn More About Bun
          </a>
        </div>
      </div>
    </div>
  );
}
