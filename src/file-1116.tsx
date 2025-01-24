import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.json();
        setServerTime(timeData.time);

        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Server Info</h2>
            <div className="space-y-3">
              {serverTime ? (
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">⏰</span>
                  <p className="text-gray-800">Server Time: {serverTime}</p>
                </div>
              ) : (
                <div className="animate-pulse text-gray-500">Loading server time...</div>
              )}
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">User Data</h2>
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="h-6 bg-gray-300 rounded animate-pulse"></div>
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-sm hover:bg-blue-50 transition-colors"
                  >
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Powered by Bun
          </div>
        </div>
      </div>
    </div>
  );
}
