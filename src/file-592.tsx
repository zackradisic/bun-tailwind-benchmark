import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm">
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
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client</h2>
            <pre className="bg-purple-100 p-4 rounded-lg text-sm">
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

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Users List
          </h2>
          
          {loading ? (
            <div className="flex justify-center items-center space-x-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
              <span className="text-xl text-gray-600">Loading...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-md rounded-lg p-4 transform transition-all hover:scale-105 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        Built with 🥟 <strong>Bun</strong> + ⚛️ <strong>React</strong>
      </div>
    </div>
  );
}
