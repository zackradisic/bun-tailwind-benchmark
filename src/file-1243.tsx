import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string>('');

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
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <div className="space-y-2">
              <p className="text-white/80">Current Server Time:</p>
              <div className="bg-white/20 rounded-lg p-3 text-xl font-mono text-green-300">
                {loading ? 'Loading...' : serverTime}
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <div className="space-y-2">
              <p className="text-white/80">Users:</p>
              {loading ? (
                <div className="animate-pulse bg-white/20 rounded-lg h-24"></div>
              ) : (
                <ul className="bg-white/20 rounded-lg p-3 max-h-48 overflow-y-auto">
                  {users.map((user, index) => (
                    <li key={index} className="text-white/90 py-1 border-b border-white/10 last:border-b-0">
                      {user.name || 'Anonymous User'}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-white/50 text-sm flex items-center space-x-2 justify-center">
        <span>⚡ Powered by</span>
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          Bun.js
        </span>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
