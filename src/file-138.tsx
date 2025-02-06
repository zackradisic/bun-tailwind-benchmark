import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <p className="font-semibold text-gray-700">React + TypeScript</p>
                <p className="text-sm text-gray-500">Fully typed, reactive UI</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <p className="font-semibold text-gray-700">Tailwind Styling</p>
                <p className="text-sm text-gray-500">Rapid, utility-first design</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-purple-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-purple-200 rounded"></div>
                    <div className="h-4 bg-purple-200 rounded"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {users.map(user => (
                  <div key={user.id} className="bg-white p-4 rounded-xl shadow-md hover:bg-purple-50 transition-colors">
                    <p className="font-semibold text-purple-700">{user.name}</p>
                    <p className="text-sm text-gray-500">User ID: {user.id}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-600">
            Built with 🔥 Bun: Full-stack TypeScript made simple
          </p>
        </div>
      </div>
    </div>
  );
}
