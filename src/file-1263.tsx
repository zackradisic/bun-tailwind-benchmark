import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <pre className="bg-blue-100 rounded-md p-4 text-sm text-blue-800">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await db.query('SELECT * FROM users');
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side</h2>
            <pre className="bg-purple-100 rounded-md p-4 text-sm text-purple-800">
              {`const [users, setUsers] = useState([]);
useEffect(() => {
  fetch('/api/users')
    .then(res => res.json())
    .then(setUsers);
}, [])`}
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-gray-100 rounded-xl p-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Users {isLoading && '⏳'}
          </h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
              <div className="h-4 w-4 bg-purple-400 rounded-full"></div>
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
            </div>
          ) : (
            <ul className="grid grid-cols-3 gap-4">
              {users.map(user => (
                <li 
                  key={user.id} 
                  className="bg-white rounded-lg p-4 shadow-md hover:bg-blue-50 transition-colors text-center"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 opacity-70">
        Built with 🦊 Bun, React & TypeScript
      </div>
    </div>
  );
}
