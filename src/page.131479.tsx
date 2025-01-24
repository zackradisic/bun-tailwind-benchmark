import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number, name: string }[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            🚀 Bun Fullstack Magic
          </h1>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Server-Side</h2>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
              </pre>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Client-Side</h2>
              {loading ? (
                <div className="flex justify-center items-center space-x-2 animate-pulse">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li 
                      key={user.id} 
                      className="bg-white p-3 rounded-lg shadow-sm hover:bg-green-100 transition-colors"
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 text-center">
          <p className="text-sm text-gray-600 font-medium">
            🌟 Built with Bun, React, and TypeScript in milliseconds
          </p>
        </div>
      </div>
    </div>
  );
}
