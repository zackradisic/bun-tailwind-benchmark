import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number, name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Server Side</h2>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
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
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Side</h2>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                {`function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);
  
  return <div>{users.map(...)}</div>;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">User List</h3>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li key={user.id} className="bg-white p-3 rounded-lg shadow-sm hover:bg-blue-50 transition-colors">
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Built with 🔥 Bun + React + TypeScript + Tailwind
        </div>
      </div>
    </div>
  );
}
