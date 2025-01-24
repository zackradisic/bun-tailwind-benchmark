import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-white drop-shadow-lg animate-pulse">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4 underline decoration-pink-500">
              Server-Side
            </h2>
            <pre className="text-sm text-gray-200 overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await db.query(
        "SELECT * FROM users"
      );
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4 underline decoration-blue-500">
              Client-Side
            </h2>
            {loading ? (
              <div className="flex justify-center items-center animate-bounce text-white">
                Loading users...
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li 
                    key={user.id} 
                    className="bg-white/20 rounded-lg p-2 text-white transform transition-all hover:scale-105 hover:bg-white/30"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/40 transition-all duration-300 font-bold tracking-wider shadow-lg">
            Create Fullstack App 🚀
          </button>
        </div>
      </div>

      <div className="text-white/70 text-sm text-center max-w-xl opacity-80">
        Built with Bun - The incredibly fast JavaScript runtime & toolkit 
        <br />
        Full-stack development made simple, fast, and delightful!
      </div>
    </div>
  );
}
