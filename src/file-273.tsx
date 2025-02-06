import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({ message: '', timestamp: '' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-3xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight animate-pulse">
          ⚡ Bun Fullstack Magic ⚡
        </h1>

        <div className="grid grid-cols-2 gap-8">
          {/* Server Side */}
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Server Response
            </h2>
            <div className="text-white space-y-2">
              <p className="font-mono bg-black/20 p-2 rounded">Message: {serverData.message || 'Loading...'}</p>
              <p className="font-mono bg-black/20 p-2 rounded">Timestamp: {serverData.timestamp || 'Fetching...'}</p>
            </div>
          </div>

          {/* Client Side */}
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z" />
              </svg>
              Client Interactions
            </h2>
            <div className="text-center space-y-4">
              <div className="bg-white/20 p-4 rounded-xl">
                <p className="text-white font-bold text-3xl mb-2">{clientCounter}</p>
                <button 
                  onClick={() => setClientCounter(c => c + 1)} 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-110 active:scale-95"
                >
                  Increment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white text-sm opacity-50 text-center">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
}
