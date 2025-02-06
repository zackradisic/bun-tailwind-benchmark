import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Bun Fullstack Playground
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm text-blue-900">
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
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client</h2>
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-600"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-purple-100 p-3 rounded-lg text-purple-900 transform transition-all hover:scale-105 hover:shadow-md"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-110"
          >
            Powered by Bun
          </button>
        </div>
      </div>
      
      <div className="text-sm text-gray-600 text-center">
        <p>🚀 Fullstack Development Made Simple</p>
        <p>React + TypeScript + Bun = ❤️</p>
      </div>
    </div>
  );
}
