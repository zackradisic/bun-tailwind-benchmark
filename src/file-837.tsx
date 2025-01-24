import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">Server Side</h2>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
      ]);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Client Side</h2>
            {isLoading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg shadow-sm transform transition-all hover:scale-102 hover:shadow-md"
                  >
                    <span className="font-semibold text-purple-700">{user.id}.</span> {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold uppercase tracking-wider shadow-lg transform transition-all hover:scale-110 hover:rotate-2">
            Built with Bun 🚀
          </div>
        </div>
      </div>
    </div>
  );
}
