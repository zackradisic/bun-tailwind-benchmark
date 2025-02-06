import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gradient-to-tr from-blue-100 to-purple-100 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Server Side</h2>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`
        SELECT * FROM users
      \`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gradient-to-tr from-green-100 to-teal-100 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Client Side</h2>
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <div className="space-y-3">
                {users.map((user, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition-colors flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-700">{user.name}</span>
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-medium text-gray-600">
            Built with {' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Bun, React & TypeScript
            </span>
            {' '} in seconds! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
