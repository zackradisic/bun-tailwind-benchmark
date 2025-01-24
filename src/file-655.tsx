import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, timeResponse] = await Promise.all([
          fetch('/api/users'),
          fetch('/api/time')
        ]);
        
        const userData = await usersResponse.json();
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 animate-pulse">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/5 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="text-white/80">
                <span className="font-semibold">Server Time:</span> 
                <span className="ml-2 bg-blue-500/30 px-2 py-1 rounded">
                  {loading ? 'Loading...' : serverTime}
                </span>
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              <p className="text-white/80">
                <span className="font-semibold">Runtime:</span> 
                <span className="ml-2 bg-green-500/30 px-2 py-1 rounded">Bun v1.x</span>
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/5 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="text-white/80 bg-white/10 px-3 py-2 rounded hover:bg-white/20 transition-colors"
                  >
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-white/60 text-sm">
        Built with 💖 using Bun, React & Tailwind
      </div>
    </div>
  );
}
