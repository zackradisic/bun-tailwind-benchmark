import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-[1.02] duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Side</h2>
            <pre className="text-sm text-blue-700 bg-blue-100 p-4 rounded-lg overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Client Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="flex justify-center items-center space-x-3 animate-pulse">
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-green-100 p-3 rounded-lg text-green-800 font-medium transform transition-all hover:scale-[1.02] hover:bg-green-200"
                    >
                      {user.name || 'Anonymous User'}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-600 transition-all duration-300">
            Built with Bun 🚀
          </div>
        </div>
      </div>
    </div>
  );
}
