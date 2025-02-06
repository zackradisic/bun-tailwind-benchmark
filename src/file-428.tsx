import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const timeResponse = await fetch('/api/time');
        
        const userData = await userResponse.json();
        const timeData = await timeResponse.json();
        
        setUsers(userData);
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="text-white/80">Current Server Time: 
                <span className="font-mono ml-2 bg-blue-500/50 px-2 py-1 rounded">
                  {serverTime || 'Loading...'}
                </span>
              </p>
              <div className="w-full h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
            {loading ? (
              <div className="space-y-2">
                {[1,2,3].map((_, index) => (
                  <div 
                    key={index} 
                    className="h-8 bg-white/20 rounded-lg animate-pulse"
                  ></div>
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li 
                    key={user.id} 
                    className="text-white/90 bg-blue-500/30 px-3 py-2 rounded-lg hover:bg-blue-500/50 transition-colors"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-white/70 text-sm text-center flex items-center space-x-2 justify-center">
        <span>Built with</span>
        <span className="font-bold text-white bg-blue-600/50 px-2 py-1 rounded-full">
          Bun
        </span>
        <span>🚀 TypeScript</span>
        <span>⚛️ React</span>
      </div>
    </div>
  );
}
