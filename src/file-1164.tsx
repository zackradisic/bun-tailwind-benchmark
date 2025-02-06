import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number, name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 animate-pulse tracking-tight">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Client-Side</h2>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <p className="text-white font-medium">
                  ✨ React + TypeScript
                </p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <p className="text-white font-medium">
                  🎨 Tailwind CSS Styling
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Server-Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4">
                  <div className="h-4 bg-white/30 rounded"></div>
                  <div className="h-4 bg-white/30 rounded w-5/6"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {users.map(user => (
                  <div 
                    key={user.id} 
                    className="bg-green-500/20 p-3 rounded-lg transform transition hover:scale-105 hover:bg-green-500/30"
                  >
                    <p className="text-white font-semibold">{user.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://bun.sh" 
            target="_blank" 
            className="bg-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-all inline-flex items-center space-x-2"
          >
            <span>Learn More About Bun</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
