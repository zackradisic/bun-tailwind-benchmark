import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const userData = await usersResponse.json();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Details</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-semibold mr-2 text-blue-600">Current Time:</span>
                <span className="text-gray-700 bg-blue-100 px-3 py-1 rounded-full">
                  {serverTime}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2 text-blue-600">Runtime:</span>
                <span className="text-gray-700 bg-blue-100 px-3 py-1 rounded-full">
                  Bun.js
                </span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Users</h2>
            <div className="max-h-64 overflow-y-auto">
              {users.length === 0 ? (
                <div className="text-gray-500 italic">Loading users...</div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-green-100 rounded-lg p-2 flex justify-between items-center hover:bg-green-200 transition-colors"
                    >
                      <span className="font-medium text-green-800">{user.name}</span>
                      <span className="text-green-600 text-sm">{user.email}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with 🚀 Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
