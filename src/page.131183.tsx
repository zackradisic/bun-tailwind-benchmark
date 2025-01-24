import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; users: any[] }>({
    message: '',
    users: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const userData = await fetch('/api/users');
        const messageData = await response.json();
        const users = await userData.json();
        setServerData({ message: messageData.message, users });
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-8">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl p-6 shadow-inner border border-white/10 hover:border-white/30 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            <p className="text-white/80 font-mono text-lg">
              {serverData.message || 'Fetching server message...'}
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 shadow-inner border border-white/10 hover:border-white/30 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
            <ul className="space-y-2">
              {serverData.users.length > 0 ? (
                serverData.users.map((user, idx) => (
                  <li 
                    key={idx} 
                    className="bg-white/5 rounded-lg p-2 text-white/90 hover:bg-white/10 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))
              ) : (
                <li className="text-white/60 italic">No users found</li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-white/20 px-6 py-3 rounded-full space-x-3 hover:bg-white/30 transition-all">
            <span className="text-xl font-semibold text-white">Built with</span>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
                Bun
              </span>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                React
              </span>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
