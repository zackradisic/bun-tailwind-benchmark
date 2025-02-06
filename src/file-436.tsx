import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string; users: any[] }>({
    message: '',
    users: []
  });

  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setServerData({
          message: 'Connected to Bun server successfully!',
          users: data
        });
      } catch (error) {
        setServerData({
          message: 'Failed to fetch server data',
          users: []
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 w-full max-w-4xl transform transition-all duration-300 hover:scale-105">
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          ⚡ Bun Fullstack Magic ⚡
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Server-Side Section */}
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-3xl font-bold mb-4 text-cyan-300">Server Side</h2>
            <div className="space-y-4">
              <p className={`text-lg font-semibold ${serverData.message.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                {serverData.message}
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-indigo-300">Users</h3>
                {serverData.users.length > 0 ? (
                  <ul className="space-y-2">
                    {serverData.users.slice(0, 3).map((user, index) => (
                      <li key={index} className="bg-white/10 rounded-md p-2 text-sm">
                        {user.name || 'Anonymous User'}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">No users found</p>
                )}
              </div>
            </div>
          </div>

          {/* Client-Side Section */}
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner flex flex-col">
            <h2 className="text-3xl font-bold mb-4 text-emerald-300">Client Side</h2>
            <div className="flex-grow flex flex-col items-center justify-center space-y-6">
              <div className="text-6xl font-bold text-yellow-400">{clientCounter}</div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setClientCounter(prev => prev + 1)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-110"
                >
                  Increment
                </button>
                <button 
                  onClick={() => setClientCounter(prev => prev - 1)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-110"
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center opacity-70 text-sm">
          Built with 🔥 Bun + React + TypeScript + Tailwind
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
