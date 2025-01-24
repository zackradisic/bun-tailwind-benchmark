import React, { useState } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<string | null>(null);

  const fetchServerData = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.text();
      setServerData(data);
    } catch (error) {
      console.error('Error fetching server data', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center space-y-8 p-6">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-6 tracking-tight drop-shadow-lg">
          Bun Full-Stack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/30 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <div className="space-y-4">
              <button 
                onClick={fetchServerData}
                className="w-full bg-white/20 hover:bg-white/40 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                Fetch Server Data
              </button>
              {serverData && (
                <div className="bg-white/20 p-4 rounded-lg text-white text-center">
                  Server Says: {serverData}
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white/30 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <pre className="bg-white/20 p-4 rounded-lg text-white text-sm overflow-x-auto">
              {`// Bun Server Example
Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/hello')) {
      return new Response('Hello from Bun! 🚀')
    }
  }
})`}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="text-white text-center opacity-70 text-sm max-w-xl">
        Built with Bun, React, TypeScript & Tailwind CSS. Showcasing the simplicity of full-stack development in a single, blazing-fast runtime. 
      </div>
    </div>
  );
}
