import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const userData = await usersResponse.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Server Info</h2>
            <div className="space-y-4">
              <p className={`py-2 px-4 rounded-lg ${loading ? 'bg-gray-200 animate-pulse' : 'bg-green-100 text-green-800'}`}>
                Server Time: {loading ? 'Loading...' : serverTime}
              </p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Users</h2>
            <ul className="space-y-2">
              {loading ? (
                <div className="space-y-2">
                  {[1,2,3].map(item => (
                    <div key={item} className="h-8 bg-gray-300 rounded animate-pulse"></div>
                  ))}
                </div>
              ) : (
                users.map(user => (
                  <li 
                    key={user.id} 
                    className="bg-white p-3 rounded-lg shadow-sm hover:bg-purple-100 transition-colors"
                  >
                    {user.name}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transform transition-all hover:scale-110 hover:bg-indigo-700">
            Built with Bun 🚀
          </div>
        </div>
      </div>
    </div>
  );
}

// Optional client-side rendering setup
if (typeof window !== 'undefined') {
  const root = createRoot(document.getElementById('root')!);
  root.render(<BunFullstackDemo />);
}
