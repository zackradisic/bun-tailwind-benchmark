import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullStackDemo() {
  const [serverInfo, setServerInfo] = useState({
    appName: 'BunStack',
    version: '1.0.0',
    uptime: 0
  });
  const [apiData, setApiData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setApiData(data);
        setLoading(false);
      } catch (error) {
        console.error('API fetch failed', error);
      }
    };

    fetchData();
    const uptimeInterval = setInterval(() => {
      setServerInfo(prev => ({ ...prev, uptime: prev.uptime + 1 }));
    }, 1000);

    return () => clearInterval(uptimeInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-6 tracking-tight animate-pulse">
          ⚡ Bun Full Stack Demo
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Info</h2>
            <div className="space-y-2">
              <p className="text-white/80">App Name: <span className="font-semibold text-white">{serverInfo.appName}</span></p>
              <p className="text-white/80">Version: <span className="font-semibold text-white">{serverInfo.version}</span></p>
              <p className="text-white/80">Uptime: <span className="font-semibold text-white">{serverInfo.uptime} seconds</span></p>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">API Data</h2>
            {loading ? (
              <div className="animate-bounce text-white">Loading...</div>
            ) : (
              <ul className="space-y-2">
                {apiData.map((user, index) => (
                  <li 
                    key={index} 
                    className="text-white/80 bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors"
                  >
                    {user.name || 'Unknown User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center text-white/50 text-sm">
        Built with 🚀 Bun + React + TypeScript
      </div>
    </div>
  );
}

// Client-side rendering
if (typeof window !== 'undefined') {
  const root = createRoot(document.getElementById('root')!);
  root.render(<BunFullStackDemo />);
}
