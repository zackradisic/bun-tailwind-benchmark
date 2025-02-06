import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Info</h2>
            <div className="space-y-3">
              <p className="flex items-center space-x-2">
                <span className="font-semibold text-blue-600">Current Time:</span>
                <span className="bg-blue-100 px-2 py-1 rounded-md text-blue-800">
                  {serverTime || 'Loading...'}
                </span>
              </p>
              <div className="h-0.5 bg-blue-200 my-3"></div>
              <p className="text-sm text-blue-600">Powered by Bun's lightning-fast server</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-600"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.length ? (
                  users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-purple-100 px-3 py-2 rounded-md text-purple-800 hover:bg-purple-200 transition-colors"
                    >
                      {user.name || 'Anonymous User'}
                    </li>
                  ))
                ) : (
                  <p className="text-purple-600">No users found</p>
                )}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React, and Tailwind - Fullstack made simple! ✨
          </p>
        </div>
      </div>
    </div>
  );
}

// Client-side rendering
if (typeof window !== 'undefined') {
  const root = createRoot(document.getElementById('root'));
  root.render(<BunFullstackDemo />);
}
