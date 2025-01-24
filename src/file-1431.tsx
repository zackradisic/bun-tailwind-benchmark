import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        setUsers(userData);

        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.json();
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
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-4xl transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 animate-pulse">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="text-white/80">
                <span className="font-semibold">Current Time:</span>{' '}
                {loading ? (
                  <span className="animate-bounce">Loading...</span>
                ) : (
                  <span className="text-green-300">{serverTime}</span>
                )}
              </p>
              <p className="text-white/80">
                <span className="font-semibold">Runtime:</span>{' '}
                <span className="text-blue-200">Bun v1.1</span>
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2">
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300"></div>
              </div>
            ) : (
              <ul className="space-y-2 max-h-48 overflow-y-auto">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-white/10 rounded-lg p-2 text-white hover:bg-white/20 transition-all"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-white/60 italic">
            Built with 💖 using Bun, React, and Tailwind
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
