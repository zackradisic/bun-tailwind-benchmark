import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 border-4 border-purple-200">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Server Side</h2>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code>
                {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
  }
})`}
              </code>
            </pre>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border-4 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Client Side</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-4 animate-pulse">
                <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                <div className="h-6 bg-blue-300 rounded w-3/4"></div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">Users</h3>
                <ul className="bg-blue-50 p-4 rounded-lg max-h-64 overflow-y-auto">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="py-2 border-b last:border-b-0 border-blue-200 hover:bg-blue-100 transition-colors"
                    >
                      {user.name || 'Anonymous User'}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://bun.sh" 
            target="_blank" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Learn More About Bun
          </a>
        </div>
      </div>
    </div>
  );
}
