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
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight animate-pulse">
            Bun Fullstack Magic ⚡️
          </h1>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Server-Side</h2>
              <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
                {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
              </pre>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Client-Side</h2>
              <div className="space-y-4">
                {loading ? (
                  <div className="flex items-center justify-center space-x-2 animate-pulse">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {users.map(user => (
                      <li 
                        key={user.id} 
                        className="bg-white border-l-4 border-purple-500 p-3 rounded shadow transform transition-all hover:translate-x-2"
                      >
                        {user.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 text-center">
          <div className="flex justify-center space-x-4">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              TypeScript
            </span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              React
            </span>
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Bun
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
