import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch('/api/users');
        const timeResponse = await fetch('/api/time');
        const userData = await usersResponse.json();
        const timeData = await timeResponse.json();
        
        setUsers(userData);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/20 rounded-2xl p-6 space-y-4">
            <h2 className="text-3xl font-bold text-white mb-4">Server Info</h2>
            <div className="bg-white/10 rounded-xl p-4 shadow-inner">
              <p className="text-xl text-purple-200">
                Server Time: 
                <span className="font-bold text-pink-300 ml-2">
                  {loading ? 'Loading...' : serverTime}
                </span>
              </p>
            </div>
          </div>
          
          <div className="bg-white/20 rounded-2xl p-6 space-y-4">
            <h2 className="text-3xl font-bold text-white mb-4">Users</h2>
            <div className="max-h-64 overflow-y-auto bg-white/10 rounded-xl p-4 shadow-inner">
              {loading ? (
                <div className="text-center text-purple-200 animate-pulse">
                  Fetching users...
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-white/20 rounded-lg p-3 text-white transform transition-all hover:scale-105 hover:bg-white/30"
                    >
                      {user.name} - {user.email}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-110 transition-all">
            Built with Bun 🚀
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
