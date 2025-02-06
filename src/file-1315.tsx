import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, timeResponse] = await Promise.all([
          fetch('/api/users'),
          fetch('/api/server-time')
        ]);
        const usersData = await usersResponse.json();
        const timeData = await timeResponse.json();
        
        setUsers(usersData);
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic 🚀
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Client Side</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-blue-600">React Component</p>
                <p className="text-gray-700">Dynamically rendering data from server</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-blue-600">State Management</p>
                <p className="text-gray-700">Using React hooks for seamless updates</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Server Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-purple-300 rounded w-3/4"></div>
                  <div className="h-4 bg-purple-300 rounded"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="font-semibold text-purple-600">Server Time</p>
                  <p className="text-gray-700">{serverTime}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="font-semibold text-purple-600">Users</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {users.map((user, index) => (
                      <li key={index}>{user.name} - {user.email}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-green-100 border-2 border-green-300 px-6 py-3 rounded-full text-green-700 font-bold">
            Powered by Bun ⚡️ React + TypeScript
          </div>
        </div>
      </div>
    </div>
  );
}
