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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Server-Side Users List */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>
            {loading ? (
              <div className="animate-pulse text-gray-500">Loading...</div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center hover:bg-blue-50 transition-colors"
                  >
                    <span className="font-medium">{user.name}</span>
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Client-Side User Creation */}
          <form 
            onSubmit={handleSubmit}
            className="bg-gray-100 rounded-xl p-6 shadow-md space-y-4"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add User</h2>
            <input 
              type="text" 
              placeholder="Name" 
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
              className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Create User
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-white opacity-70">
        <p>⚡ Built with Bun, React & TypeScript</p>
      </div>
    </div>
  );
}
