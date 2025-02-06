import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const timeResponse = await fetch('/api/time');
        const userData = await userResponse.json();
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
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 mb-6">
          Bun Fullstack Magic ⚡️
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-xl p-4 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server</h2>
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">
                🕒 Server Time: 
                <span className="ml-2 text-indigo-600 font-bold">
                  {serverTime || 'Loading...'}
                </span>
              </p>
              <div className="h-0.5 bg-purple-200 my-2"></div>
              <p className="text-sm text-gray-500">
                Dynamically generated server-side data
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-4 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client</h2>
            <div className="space-y-2">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-purple-300 rounded"></div>
                    <div className="h-4 bg-purple-300 rounded w-5/6"></div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li 
                      key={user.id} 
                      className="text-gray-700 bg-purple-100 rounded px-3 py-1 text-sm font-medium transition-colors hover:bg-purple-200"
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 italic">
            Built with Bun, React & TypeScript 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
