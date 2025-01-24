import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackshowcase() {
  const [serverData, setServerData] = useState<{ message: string; users: any[] }>({
    message: 'Loading...',
    users: []
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setServerData({
          message: 'Connected to Bun Server 🚀',
          users: data
        });
      } catch (error) {
        setServerData({
          message: 'Server connection failed',
          users: []
        });
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-2xl w-full transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center text-white mb-6 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <ul className="space-y-2">
              {['React', 'TypeScript', 'Tailwind', 'ESM'].map((tech, idx) => (
                <li key={idx} className="flex items-center text-white">
                  <span className="mr-2 text-green-400">✓</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <div className="text-white">
              <p className="mb-2">{serverData.message}</p>
              <p className="text-sm text-gray-200">
                Users Fetched: {serverData.users.length}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => window.location.reload()}
            className="bg-white/20 hover:bg-white/40 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 backdrop-blur-sm"
          >
            Reload Data
          </button>
        </div>
      </div>

      <footer className="text-white/60 text-sm text-center">
        Built with 🔥 Bun v1.1 | React + TypeScript
      </footer>
    </div>
  );
}
