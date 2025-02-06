import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, timeResponse] = await Promise.all([
          fetch('/api/users'),
          fetch('/api/time')
        ]);

        const usersData = await usersResponse.json();
        const timeData = await timeResponse.json();

        setUsers(usersData);
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Server Info</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-white/80">
                  Server Time: {serverTime || 'Loading...'}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <p className="text-white/80">
                  Runtime: Bun v{process.version}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-150"></div>
                <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-300"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={user.id || index} 
                    className="bg-white/10 rounded-lg p-2 text-white/80 hover:bg-white/20 transition"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-white/70 text-sm">
        <p>Built with Bun 🥟 | React ⚛️ | TypeScript 📘 | Tailwind 🌈</p>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
