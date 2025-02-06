import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
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
        console.error('Failed to fetch data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Server Details</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-lg text-gray-100">Current Server Time: {serverTime}</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h3 className="text-xl font-semibold text-white mb-2">Connected Users</h3>
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="bg-white/5 rounded-lg p-2 text-gray-200 hover:bg-white/10 transition-colors">
                      {user.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 shadow-inner flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">🌟 Client Interaction</h2>
              <p className="text-gray-200 mb-6">
                Seamlessly connecting server and client with Bun's lightning-fast runtime
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-105 active:scale-95">
                  Sync Data
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-105 active:scale-95">
                  Refresh Users
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-white/50 text-sm text-center">
        Built with 💖 using Bun, React & TypeScript
      </footer>
    </div>
  );
};

export default BunFullstackShowcase;
