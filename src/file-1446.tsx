import "./style.css";
import { useState, useEffect } from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Bun Fullstack
          </h1>
          <p className="text-xl text-gray-300">Blazing fast React + TypeScript development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="bg-green-500 w-3 h-3 rounded-full mr-2 animate-pulse"></span>
              Server
            </h2>
            <pre className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(await Bun.sql\`
        SELECT * FROM users
      \`);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-500 w-3 h-3 rounded-full mr-2 animate-ping"></span>
              Client
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4">
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {users.map(user => (
                      <li key={user.id} className="flex items-center space-x-2">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                          {user.name[0]}
                        </span>
                        <span>{user.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
