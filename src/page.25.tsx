import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-4">
            Bun Fullstack Demo
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-green-500/20 text-green-400 p-2 rounded-md mr-2">🚀</span>
                Server Side
              </h2>
              <div className="space-y-4">
                <code className="block bg-black/30 p-4 rounded text-sm text-green-400 font-mono">
                  Bun.serve({`{`}<br/>
                  &nbsp;&nbsp;static: {`{`} "/": Homepage {`}`},<br/>
                  &nbsp;&nbsp;fetch: async (req) => {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;const users = await db.query();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;return Response.json(users);<br/>
                  &nbsp;&nbsp;{`}`}<br/>
                  {`}`})
                </code>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-blue-500/20 text-blue-400 p-2 rounded-md mr-2">⚛️</span>
                Client Side
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-black/30 p-4 rounded">
                  <span>Counter:</span>
                  <button 
                    onClick={() => setCount(c => c + 1)}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition"
                  >
                    {count}
                  </button>
                </div>

                <div className="bg-black/30 p-4 rounded">
                  <h3 className="font-medium mb-2">Users from API:</h3>
                  {loading ? (
                    <div className="animate-pulse">Loading...</div>
                  ) : (
                    <ul className="space-y-2">
                      {users.map((user, i) => (
                        <li key={i} className="text-sm text-gray-300">{user.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p>Built with Bun + React + TypeScript + Tailwind</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded">Bun</div>
              <div className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded">React</div>
              <div className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded">TypeScript</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
