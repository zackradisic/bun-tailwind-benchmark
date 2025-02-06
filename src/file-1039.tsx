import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string>('');

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
        console.error('Failed to fetch data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6 tracking-tight animate-pulse">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Capabilities</h2>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-3 rounded-md">
                <p className="text-white font-semibold">Server Time: 
                  <span className="ml-2 text-blue-200">
                    {loading ? 'Loading...' : serverTime}
                  </span>
                </p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-md">
                <p className="text-white font-semibold">Runtime: 
                  <span className="ml-2 text-green-200">Bun v1.1</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-white/30 rounded"></div>
                  <div className="h-4 bg-white/30 rounded"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={user.id || index} 
                    className="bg-white/20 p-3 rounded-md hover:bg-white/30 transition-all"
                  >
                    <span className="text-white font-medium">
                      {user.name || 'Anonymous User'}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-white/80 max-w-xl text-sm">
        <p className="italic">
          Built with Bun - The all-in-one JavaScript runtime & toolkit
        </p>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
