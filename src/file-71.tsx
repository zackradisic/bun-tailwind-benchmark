import "./style.css";
import { useState, useEffect } from "react";

export default function BunShowcase() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun + React = 🚀
          </h1>
          <div className="animate-bounce bg-purple-500 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Server-Side Magic</h2>
            <pre className="bg-black rounded p-4 overflow-x-auto">
              <code className="text-sm text-green-400">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if (req.url.endsWith("/api/users")) {
      return Response.json(
        await Bun.sql\`SELECT * FROM users\`
      );
    }
  }
})`}
              </code>
            </pre>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Client-Side Data</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-600 rounded"></div>
                    <div className="h-4 bg-gray-600 rounded w-5/6"></div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center space-x-3 bg-gray-700 p-2 rounded">
                      <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
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

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-400">
            Built with
            <span className="mx-2 text-yellow-400">⚡</span>
            by Bun in microseconds
          </p>
        </div>
      </div>
    </div>
  );
}
