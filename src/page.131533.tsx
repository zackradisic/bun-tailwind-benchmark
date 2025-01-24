import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number, name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState('');

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

  const handleAddUser = async () => {
    if (!newUser.trim()) return;
    
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newUser })
      });
      const addedUser = await response.json();
      setUsers([...users, addedUser]);
      setNewUser('');
    } catch (error) {
      console.error('Failed to add user', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <input 
              type="text"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              placeholder="Enter new user name"
              className="flex-grow px-4 py-2 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <button 
              onClick={handleAddUser}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-all active:scale-95"
            >
              Add User
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center space-x-2 animate-pulse">
              <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
            </div>
          ) : (
            <div className="max-h-64 overflow-y-auto">
              <ul className="space-y-2">
                {users.map(user => (
                  <li 
                    key={user.id} 
                    className="bg-purple-50 px-4 py-2 rounded-lg flex justify-between items-center hover:bg-purple-100 transition-colors"
                  >
                    <span className="font-medium text-purple-800">{user.name}</span>
                    <span className="text-sm text-purple-500">ID: {user.id}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-purple-600 opacity-70">
        Built with 🍞 Bun, React & TypeScript
      </div>
    </div>
  );
}
