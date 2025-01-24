import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl duration-300">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-6 border-4 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side 🚀</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-purple-50 rounded-2xl p-6 border-4 border-purple-200 hover:border-purple-400 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side ⚛️</h2>
            {loading ? (
              <div className="flex items-center justify-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              </div>
            ) : (
              <div className="space-y-2">
                {users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition-colors flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-purple-300 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-purple-800">{user.name}</p>
                      <p className="text-sm text-purple-600">{user.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-green-100 border-2 border-green-300 px-6 py-3 rounded-full text-green-800 font-bold hover:bg-green-200 transition-all">
            Full Stack in One File 🎉
          </div>
        </div>
      </div>
    </div>
  );
}
