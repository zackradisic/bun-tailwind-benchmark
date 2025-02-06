import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <pre className="text-sm text-gray-700 bg-blue-100 p-4 rounded-lg">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Client Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-green-200 rounded"></div>
                    <div className="h-4 bg-green-200 rounded"></div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-green-100 p-2 rounded-lg text-green-800 text-sm flex justify-between hover:bg-green-200 transition-colors"
                    >
                      <span>{user.name}</span>
                      <span className="text-green-600">{user.email}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-700">
            Built with 🚀 Bun: TypeScript + React + Fullstack Simplicity
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
