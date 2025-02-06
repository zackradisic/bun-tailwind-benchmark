import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState({
    runtime: 'Bun',
    version: '1.1.0',
    uptime: 0
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    const uptimeInterval = setInterval(() => {
      setServerInfo(prev => ({
        ...prev,
        uptime: prev.uptime + 1
      }));
    }, 1000);

    fetchUsers();

    return () => clearInterval(uptimeInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Info</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span className="font-semibold">Runtime:</span>
                <span className="text-blue-600">{serverInfo.runtime}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Version:</span>
                <span className="text-blue-600">{serverInfo.version}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Uptime:</span>
                <span className="text-blue-600">{serverInfo.uptime}s</span>
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-600"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-sm hover:bg-purple-100 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackDemo;
