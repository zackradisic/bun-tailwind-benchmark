import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center tracking-tight">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-auto">
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

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side</h2>
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li 
                    key={user.id} 
                    className="bg-purple-100 p-3 rounded-lg shadow-sm hover:bg-purple-200 transition-colors"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider hover:scale-105 transform transition-all">
            Built with Bun 🚀
          </div>
        </div>
      </div>
    </div>
  );
}
