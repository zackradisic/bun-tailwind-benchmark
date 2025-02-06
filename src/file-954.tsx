import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 space-y-4 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700">Server Stats</h2>
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">
                Current Server Time: 
                <span className="ml-2 bg-blue-200 px-3 py-1 rounded-full text-blue-800">
                  {loading ? 'Loading...' : serverTime}
                </span>
              </p>
              <div className="h-1 w-full bg-blue-200 rounded"></div>
              <p className="text-sm text-gray-500">Powered by Bun's lightning-fast runtime</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 space-y-4 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700">Users</h2>
            {loading ? (
              <div className="animate-pulse space-y-3">
                {[1,2,3].map((_, i) => (
                  <div key={i} className="h-8 bg-purple-200 rounded"></div>
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={user.id} 
                    className="bg-purple-100 px-4 py-2 rounded-lg text-purple-800 transform transition-all hover:scale-105 hover:bg-purple-200"
                  >
                    {user.name || `User ${index + 1}`}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-green-100 px-6 py-3 rounded-full text-green-800 font-bold shadow-md">
            Build Fast, Run Faster with Bun 🚀
          </div>
        </div>
      </div>
    </div>
  );
}
