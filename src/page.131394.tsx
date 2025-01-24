import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const timeResponse = await fetch('/api/time');
        const users = await userResponse.json();
        const timeData = await timeResponse.json();
        
        setUsers(users);
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="text-white/80">Server Time: 
                <span className="font-mono ml-2 bg-blue-500/30 px-2 py-1 rounded">
                  {serverTime || 'Loading...'}
                </span>
              </p>
              <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li key={user.id} className="text-white/80 bg-blue-500/20 px-3 py-2 rounded-lg flex justify-between items-center hover:bg-blue-500/40 transition">
                    <span>{user.name}</span>
                    <span className="text-sm bg-purple-500/30 px-2 py-1 rounded-full">ID: {user.id}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-green-500/20 px-4 py-2 rounded-full text-white">
            Built with 🍞 Bun, React & TypeScript
          </div>
        </div>
      </div>
    </div>
  );
}
