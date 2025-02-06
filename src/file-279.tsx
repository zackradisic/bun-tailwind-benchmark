import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });
    const addedUser = await response.json();
    setUsers([...users, addedUser]);
    setNewUser({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-[1.02]">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server-Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client-Side</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400"
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-all"
              >
                Add User
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 rounded-xl p-6 shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">User List</h3>
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
              <div className="h-4 w-4 bg-purple-400 rounded-full"></div>
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
            </div>
          ) : (
            <ul className="space-y-2">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-white p-3 rounded-lg shadow-sm hover:bg-blue-50 transition-colors"
                >
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
