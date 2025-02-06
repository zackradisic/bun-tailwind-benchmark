import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const addUser = async () => {
    if (!newUser.trim()) return;

    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newUser })
    });

    const addedUser = await response.json();
    setUsers([...users, addedUser]);
    setNewUser('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Demo
        </h1>

        <div className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              placeholder="Enter new user name"
              className="flex-grow px-4 py-2 bg-white/10 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              onClick={addUser}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Add User
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center space-x-2 text-white animate-pulse">
              <div className="w-4 h-4 bg-white/50 rounded-full"></div>
              <div className="w-4 h-4 bg-white/50 rounded-full"></div>
              <div className="w-4 h-4 bg-white/50 rounded-full"></div>
            </div>
          ) : (
            <ul className="space-y-2">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-white/10 text-white px-4 py-2 rounded-lg flex items-center justify-between hover:bg-white/20 transition-colors"
                >
                  <span>{user.name}</span>
                  <span className="text-sm text-gray-300">ID: {user.id}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-center text-white/70 text-sm">
        Built with 🔥 Bun + React + TypeScript
      </div>
    </div>
  );
}
