import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const userData = await usersResponse.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="p-8 space-y-6">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Bun Fullstack Magic ✨
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-xl shadow-md space-y-4">
              <h2 className="text-2xl font-bold text-indigo-700">Server Details</h2>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <span className="font-semibold text-indigo-600">Current Time:</span>
                  <span className="text-gray-800 font-mono">{serverTime || 'Loading...'}</span>
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-md space-y-4">
              <h2 className="text-2xl font-bold text-green-700">Users</h2>
              {loading ? (
                <div className="flex justify-center items-center space-x-2 animate-pulse">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center hover:bg-green-100 transition-colors"
                    >
                      <span className="font-medium text-green-800">{user.name}</span>
                      <span className="text-sm text-green-600">{user.email}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all transform hover:scale-110">
              Built with 🚀 Bun
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
