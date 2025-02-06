import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState({
    runtime: 'Bun',
    version: '1.0.0',
    startTime: Date.now()
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Info</h2>
              <div className="space-y-2">
                <p className="text-lg">
                  <span className="font-semibold text-blue-600">Runtime:</span> {serverInfo.runtime}
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-blue-600">Version:</span> {serverInfo.version}
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-blue-600">Uptime:</span> {((Date.now() - serverInfo.startTime) / 1000).toFixed(1)} sec
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Users</h2>
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-white p-3 rounded-lg shadow-sm hover:bg-purple-100 transition-colors"
                    >
                      {user.name || 'Unknown User'}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600">
            Built with ❤️ using Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
