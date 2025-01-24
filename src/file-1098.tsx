import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
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
        console.error('Failed to fetch data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Server Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Server Time</p>
                <p className="text-xl font-semibold text-blue-600">
                  {loading ? 'Loading...' : serverTime}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Bun Version</p>
                <p className="text-xl font-semibold text-green-600">
                  1.0.0
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Users
            </h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-3 animate-pulse">
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-4">
                {users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {user.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600">
            Built with 💖 using Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
