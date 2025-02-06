import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Bun Fullstack Magic 🚀
        </h1>

        <div className="space-y-4">
          <div className="flex items-center">
            <input 
              type="text" 
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              placeholder="Enter new user name" 
              className="flex-grow px-4 py-2 border-2 border-blue-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleAddUser}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-all"
            >
              Add User
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center space-x-2 animate-pulse">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          ) : (
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-blue-50 p-3 rounded-lg shadow-sm flex items-center justify-between hover:bg-blue-100 transition-colors"
                >
                  <span className="font-medium text-blue-800">{user.name}</span>
                  <span className="text-sm text-blue-600">ID: {user.id}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        Built with 💖 using{' '}
        <span className="font-bold text-blue-600">Bun</span>, {' '}
        <span className="font-bold text-purple-600">React</span>, and {' '}
        <span className="font-bold text-teal-600">TypeScript</span>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
