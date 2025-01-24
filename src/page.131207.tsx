import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            ⚡ Bun Fullstack Magic ⚡
          </h1>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">
                🚀 Server-Side Magic
              </h2>
              <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
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

            <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">
                👥 Users List
              </h2>
              {loading ? (
                <div className="flex justify-center items-center space-x-2 animate-pulse">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li 
                      key={user.id} 
                      className="bg-white border border-gray-200 p-3 rounded-lg shadow-sm hover:bg-purple-50 transition-colors"
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600 italic">
            Built with ❤️ using Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
