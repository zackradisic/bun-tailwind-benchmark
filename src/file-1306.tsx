import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users', error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });
      const addedUser = await response.json();
      setUsers([...users, addedUser]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error adding user', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-3xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col space-y-4 mb-8 animate-fade-in-up"
        >
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({...newUser, name: e.target.value})}
            placeholder="Enter Name"
            className="px-4 py-2 bg-white/20 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            placeholder="Enter Email"
            className="px-4 py-2 bg-white/20 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
          <button 
            type="submit" 
            className="bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold py-2 rounded-lg hover:opacity-90 transition-all transform active:scale-95"
          >
            Add User
          </button>
        </form>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user, index) => (
              <div 
                key={index} 
                className="bg-white/20 backdrop-blur-lg rounded-lg p-4 text-white transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="font-bold text-lg mb-2">{user.name}</h3>
                <p className="text-sm opacity-80">{user.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="text-center text-white/50 text-sm">
        Built with 🍞 Bun, React & TypeScript
      </div>
    </div>
  );
}
