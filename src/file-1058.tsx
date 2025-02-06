import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [clientCount, setClientCount] = useState<number>(0);

  useEffect(() => {
    fetch('/api/time')
      .then(res => res.text())
      .then(time => setServerTime(time))
      .catch(err => setServerTime('Error fetching time'));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center space-y-8 p-6">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <p className="text-white/80 text-lg font-medium">
              Server Time: 
              <span className="block text-3xl text-green-300 mt-2">
                {serverTime}
              </span>
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <div className="flex flex-col items-center">
              <p className="text-white/80 text-lg font-medium mb-4">
                Clicks: 
                <span className="text-3xl text-blue-300 ml-2">
                  {clientCount}
                </span>
              </p>
              <button 
                onClick={() => setClientCount(c => c + 1)}
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors active:scale-95 shadow-lg"
              >
                Increment
              </button>
            </div>
          </div>
        </div>

        <p className="text-white/70 italic text-sm max-w-2xl mx-auto">
          Built with Bun: Seamless fullstack development, combining server-side rendering and client-side interactivity
        </p>
      </div>
    </div>
  );
}
