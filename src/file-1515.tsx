import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="w-full max-w-3xl bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8 transform hover:scale-105 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <div className="space-y-3">
              <p className="text-lg text-blue-100">React State Management</p>
              <div className="bg-blue-900/30 p-3 rounded-lg">
                <span className="text-white font-mono">Users Count: {users.length}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <div className="space-y-3">
              <p className="text-lg text-green-100">Real-time Server Data</p>
              <div className="bg-green-900/30 p-3 rounded-lg">
                <span className="text-white font-mono">Current Time: {serverTime}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-white/10 rounded-xl p-4 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">User List</h3>
            <ul className="grid grid-cols-3 gap-2">
              {users.map(user => (
                <li key={user.id} className="bg-blue-900/30 p-2 rounded text-white">
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center text-white/50 text-sm">
        Built with 🥟 Bun, React & Tailwind
      </div>
    </div>
  );
};

export default BunFullstackDemo;
