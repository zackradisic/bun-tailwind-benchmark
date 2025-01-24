import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 space-y-6 transform transition-all hover:scale-105 hover:shadow-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 mb-4">
            Bun Fullstack Demo
          </h1>
          <p className="text-gray-600 mb-6">Lightning-fast React & TypeScript</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              placeholder="Enter new user name" 
              className="flex-grow px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <button 
              onClick={handleAddUser}
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
            >
              Add User
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center space-x-2 text-purple-600">
              <span className="animate-pulse">Loading...</span>
            </div>
          ) : (
            <div className="max-h-64 overflow-y-auto">
              <ul className="space-y-2">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-purple-50 p-3 rounded-lg flex items-center justify-between hover:bg-purple-100 transition-all"
                  >
                    <span className="text-gray-700">{user.name}</span>
                    <span className="text-sm text-purple-500">ID: {user.id}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="text-center text-xs text-gray-500 mt-4">
          Built with <span className="font-bold text-purple-600">Bun</span> ⚡️ React & TypeScript
        </div>
      </div>
    </div>
  );
}
