import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
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
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Details</h2>
            <div className="space-y-4">
              <p className="bg-white p-3 rounded-lg shadow-sm">
                <span className="font-semibold text-blue-600">Current Time:</span> 
                <span className="ml-2 text-gray-800">{serverTime || 'Loading...'}</span>
              </p>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-600 mb-2">Users</h3>
                {users.length === 0 ? (
                  <p className="text-gray-500">Fetching users...</p>
                ) : (
                  <ul className="space-y-2">
                    {users.map(user => (
                      <li key={user.id} className="flex items-center">
                        <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                        <span className="text-gray-800">{user.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-6 shadow-md flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Interaction</h2>
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg">
                Sync Data
              </button>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="text-gray-700">
                  Connected to Bun Fullstack Server
                  <span className="ml-2 text-green-500">🟢</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-center">
        Built with 🔥 Bun, React & TypeScript
      </div>
    </div>
  );
}
