import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

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
        console.error('Failed to fetch users', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight animate-pulse">
            ⚡ Bun Fullstack Demo
          </h1>
          <p className="mt-2 text-lg opacity-80">
            Blazing fast fullstack development
          </p>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-bounce">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
            </div>
          ) : (
            <div className="grid gap-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Users from Server
              </h2>
              {users.map(user => (
                <div 
                  key={user.id} 
                  className="bg-gray-100 p-4 rounded-xl shadow-md flex justify-between items-center hover:bg-gray-200 transition-colors"
                >
                  <span className="font-medium text-gray-700">{user.name}</span>
                  <span className="text-sm text-blue-600 font-bold">
                    User #{user.id}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-50 p-4 text-center border-t">
          <p className="text-sm text-gray-500">
            Built with 🍞 Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
