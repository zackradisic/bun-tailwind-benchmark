import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data', error);
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-white drop-shadow-lg tracking-wide animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Server Info</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="mr-3 text-blue-300">⏰</span>
                <p className="text-white font-medium">
                  Current Server Time: {serverTime || 'Loading...'}
                </p>
              </div>
              <div className="h-0.5 bg-white/30 my-2"></div>
              <div className="flex items-center">
                <span className="mr-3 text-green-300">🌐</span>
                <p className="text-white font-medium">
                  Server Runtime: Bun
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-white/30 rounded w-3/4"></div>
                  <div className="h-4 bg-white/30 rounded w-1/2"></div>
                  <div className="h-4 bg-white/30 rounded w-2/3"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li 
                    key={user.id} 
                    className="text-white bg-white/10 p-2 rounded hover:bg-white/20 transition-all duration-200"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center text-white/70 text-sm flex items-center space-x-2 opacity-75 hover:opacity-100 transition-all">
        <span>🚀 Built with</span>
        <span className="font-bold bg-white/20 px-2 py-1 rounded">Bun</span>
        <span>+</span>
        <span className="font-bold bg-white/20 px-2 py-1 rounded">React</span>
        <span>+</span>
        <span className="font-bold bg-white/20 px-2 py-1 rounded">TypeScript</span>
      </div>
    </div>
  );
}
