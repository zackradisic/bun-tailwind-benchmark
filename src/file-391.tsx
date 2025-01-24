import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.json();
        
        setUsers(userData);
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            Bun Fullstack Playground
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
              <h2 className="text-2xl font-bold text-white mb-4">Server Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-cyan-300 font-semibold">Server Time:</span>
                  <span className="text-white font-mono">{serverTime || 'Loading...'}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-cyan-300 font-semibold">Runtime:</span>
                  <span className="text-white font-mono">Bun.js</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
              <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-white/30 rounded w-3/4"></div>
                    <div className="h-4 bg-white/30 rounded"></div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-white/10 rounded p-2 text-white transition-all duration-300 hover:bg-white/20"
                    >
                      {user.name} - {user.email}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="font-bold">Bun Fullstack Magic ✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
