import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-6 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/30 pb-2">
              Server Capabilities
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-white text-lg">
                  Server Time: {serverTime}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/30 pb-2">
              Users ({users.length})
            </h2>
            <ul className="space-y-2">
              {users.map(user => (
                <li 
                  key={user.id} 
                  className="text-white bg-white/5 rounded-lg px-4 py-2 hover:bg-white/10 transition-all"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="#" 
            className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all flex items-center justify-center space-x-2 mx-auto max-w-xs"
          >
            <span>🚀 Powered by Bun</span>
          </a>
        </div>
      </div>

      <div className="text-white/50 text-sm text-center">
        Built with ❤️ using Bun, React & TypeScript
      </div>
    </div>
  );
}
