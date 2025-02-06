import "./style.css";
import React, { useState, useEffect } from 'react';

const FullstackBunDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState({
    runtime: 'Bun',
    version: '1.0.0',
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

    fetchUsers();
    const uptimeInterval = setInterval(() => {
      setServerInfo(prev => ({ ...prev, uptime: prev.uptime + 1 }));
    }, 1000);

    return () => clearInterval(uptimeInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-blue-600">Runtime:</span>
                <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                  {serverInfo.runtime}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-blue-600">Version:</span>
                <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                  {serverInfo.version}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-blue-600">Uptime:</span>
                <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                  {serverInfo.uptime}s
                </span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-purple-600"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-purple-200 text-purple-800 px-4 py-2 rounded-lg flex justify-between items-center hover:bg-purple-300 transition-colors"
                  >
                    <span>{user.name}</span>
                    <span className="text-sm text-purple-600">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        Built with 🚀 Bun + React + TypeScript + Tailwind
      </div>
    </div>
  );
};

export default FullstackBunDemo;
