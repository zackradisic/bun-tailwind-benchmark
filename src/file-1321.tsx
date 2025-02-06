import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState({
    version: 'Bun v1.1.x',
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

    const startServerUptime = Date.now();
    const uptimeInterval = setInterval(() => {
      setServerInfo(prev => ({
        ...prev,
        uptime: Math.floor((Date.now() - startServerUptime) / 1000)
      }));
    }, 1000);

    fetchUsers();
    return () => clearInterval(uptimeInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl space-y-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
            Bun Fullstack Playground
          </h1>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
            🚀 Blazing Fast
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-100 hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2 text-indigo-600">🔧</span>
                <strong>Version:</strong> {serverInfo.version}
              </p>
              <p className="flex items-center">
                <span className="mr-2 text-green-600">⏱️</span>
                <strong>Uptime:</strong> {serverInfo.uptime} seconds
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-100 hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center">
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

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React & TypeScript in seconds! ⚡️
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
