import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            🚀 Bun Fullstack Magic
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Blazing Fast Fullstack Development with React & TypeScript
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-2xl p-6 transform transition hover:scale-105 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                Server-Side 🖥️
              </h2>
              <pre className="text-sm text-white/70 bg-black/20 p-4 rounded-lg overflow-x-auto">
                {`Bun.serve({
  fetch: async (req) => {
    if (req.url.endsWith('/api/users')) {
      const users = await db.query('SELECT * FROM users');
      return Response.json(users);
    }
  }
})`}
              </pre>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 transform transition hover:scale-105 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                Client-Side 💻
              </h2>
              <div className="text-white">
                {loading ? (
                  <div className="animate-pulse text-center">
                    Loading users...
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {users.map((user, index) => (
                      <li 
                        key={index} 
                        className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition"
                      >
                        {user.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <a 
              href="https://bun.sh" 
              target="_blank" 
              className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition flex items-center"
            >
              Learn More About Bun
            </a>
            <a 
              href="https://github.com/oven-sh/bun" 
              target="_blank" 
              className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition flex items-center"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
