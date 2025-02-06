import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.text();
        setServerData(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch server data', error);
        setLoading(false);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <span className="mr-2 text-green-400">•</span>React
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">•</span>TypeScript
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">•</span>Tailwind CSS
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <div className="text-white/80 min-h-[100px]">
              {loading ? (
                <div className="animate-bounce text-yellow-300">
                  Fetching server data...
                </div>
              ) : (
                <p className="text-white">
                  Server Response: {serverData || 'No data'}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://bun.sh" 
            target="_blank" 
            className="bg-white/20 hover:bg-white/40 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 inline-block transform hover:-translate-y-1 hover:scale-110"
          >
            Explore Bun 🚀
          </a>
        </div>
      </div>
      
      <footer className="text-white/50 text-sm">
        Built with ❤️ using Bun, React & Tailwind
      </footer>
    </div>
  );
};

export default BunFullstackShowcase;
