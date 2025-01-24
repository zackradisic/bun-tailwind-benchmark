import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
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

  const handleAddUser = async () => {
    if (!newUser.trim()) return;

    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newUser })
    });

    const addedUser = await response.json();
    setUsers(prev => [...prev, addedUser]);
    setNewUser('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
          Bun Fullstack Demo
        </h1>
        
        <div className="flex space-x-4 mb-6">
          <input 
            type="text" 
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Enter new user name" 
            className="flex-grow px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button 
            onClick={handleAddUser}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all active:scale-95"
          >
            Add User
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center space-x-4 animate-pulse">
            <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
            <div className="text-gray-600">Loading users...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map(user => (
              <div 
                key={user.id} 
                className="bg-blue-50 p-4 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {user.id}
                  </div>
                  <span className="font-semibold text-gray-800">{user.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-center text-sm text-gray-500 opacity-70">
        Built with 🚀 Bun, React, and Tailwind
      </div>
    </div>
  );
}
