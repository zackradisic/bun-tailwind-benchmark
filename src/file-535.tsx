import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Loading...',
    timestamp: ''
  });

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ 
          message: 'Error fetching data', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 max-w-2xl w-full transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <ul className="space-y-2 text-white/80">
              <li>✅ React with TypeScript</li>
              <li>✅ Tailwind CSS Styling</li>
              <li>✅ Dynamic Rendering</li>
              <li>✅ State Management</li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <div className="text-white/90">
              <p className="font-semibold">Server Message:</p>
              <p className="text-xl font-bold text-green-300">{serverData.message}</p>
              <p className="text-sm text-white/60 mt-2">
                Timestamp: {serverData.timestamp}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-white/20 px-6 py-3 rounded-full border border-white/30 text-white font-bold">
            Built with 🫐 Bun: Blazing Fast Fullstack
          </div>
        </div>
      </div>
      
      <div className="text-white/50 text-sm text-center max-w-xl">
        This demo showcases how simple it is to create a fullstack application using Bun, 
        with seamless server-client communication and beautiful, responsive design.
      </div>
    </div>
  );
}
