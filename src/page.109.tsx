import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-4">
            Bun Fullstack
          </h1>
          <p className="text-xl text-gray-300">Lightning fast React & TypeScript development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-green-500/20 text-green-400 p-2 rounded-lg mr-3">🚀</span>
              Server Side
            </h2>
            <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto text-sm text-gray-300">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch(req) {
    if(req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg mr-3">⚛️</span>
              Client Side
            </h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 bg-gray-700/50 rounded w-full"></div>
                </div>
              ) : (
                users.map(user => (
                  <div key={user.id} className="bg-gray-900/50 p-4 rounded-lg flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                      {user.name[0].toUpperCase()}
                    </div>
                    <div className="text-lg">{user.name}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Built with 
            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded mx-2 font-mono">bun</span>
            +
            <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded mx-2 font-mono">react</span>
            +
            <span className="bg-teal-500/20 text-teal-400 px-2 py-1 rounded mx-2 font-mono">typescript</span>
          </p>
        </div>
      </div>
    </div>
  );
}
