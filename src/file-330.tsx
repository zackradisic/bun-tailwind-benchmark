import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            🚀 Bun Fullstack Magic
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-2xl shadow-md border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Server-Side</h2>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users)
    }
  }
})`}
              </pre>
            </div>
            
            <div className="bg-green-50 p-6 rounded-2xl shadow-md border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Client-Side</h2>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                {`const [users, setUsers] = useState([])
useEffect(() => {
  fetch('/api/users')
    .then(res => res.json())
    .then(setUsers)
})`}
              </pre>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-2xl overflow-hidden">
            <div className="bg-purple-100 p-4 font-semibold text-purple-800">
              Users List
            </div>
            {loading ? (
              <div className="flex justify-center items-center p-8">
                <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="p-4 hover:bg-purple-50 transition-colors duration-200 flex justify-between"
                  >
                    <span className="font-medium text-gray-800">{user.name}</span>
                    <span className="text-gray-500">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Built with 💖 using Bun, React & TypeScript
        </div>
      </div>
    </div>
  );
}
