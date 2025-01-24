import React, { useState } from 'react';

const FullStackBunApp: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async () => {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md transform transition-all hover:scale-105 duration-300">
        <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Bun Full-Stack Magic ✨
        </h1>
        
        <div className="flex mb-4">
          <input 
            type="text" 
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Enter new user name" 
            className="flex-grow px-4 py-2 border-2 border-purple-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button 
            onClick={addUser}
            className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors active:scale-95"
          >
            Add User
          </button>
        </div>

        <button 
          onClick={fetchUsers}
          disabled={loading}
          className={`w-full mb-4 py-2 rounded-lg text-white transition-all duration-300 ${
            loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
          }`}
        >
          {loading ? 'Loading...' : 'Fetch Users'}
        </button>

        <div className="max-h-64 overflow-auto">
          {users.length === 0 ? (
            <p className="text-center text-gray-500">No users found</p>
          ) : (
            <ul className="space-y-2">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-purple-100 px-4 py-2 rounded-lg shadow-sm hover:bg-purple-200 transition-colors"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-6 text-white text-sm text-center opacity-70">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
};

export default FullStackBunApp;
