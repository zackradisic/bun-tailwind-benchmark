import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [showServer, setShowServer] = useState(true);

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
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Bun Fullstack
          </h1>
          <div className="space-x-4">
            <button 
              onClick={() => setShowServer(true)}
              className={`px-6 py-2 rounded-full transition-all ${
                showServer 
                  ? "bg-pink-500 hover:bg-pink-600" 
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              Server
            </button>
            <button
              onClick={() => setShowServer(false)} 
              className={`px-6 py-2 rounded-full transition-all ${
                !showServer
                  ? "bg-violet-500 hover:bg-violet-600"
                  : "bg-gray-800 hover:bg-gray-700" 
              }`}
            >
              Client
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className={`transform transition-all duration-500 ${
            showServer ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}>
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-pink-500 mb-4">Server-side Code</h2>
              <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                <code className="text-sm text-gray-300">
                  {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`
        SELECT * FROM users
      \`;
      return Response.json(users);
    }
  }
})`}
                </code>
              </pre>
            </div>
          </div>

          <div className={`transform transition-all duration-500 ${
            !showServer ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}>
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-violet-500 mb-4">Client-side Data</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {users.map((user, i) => (
                    <div key={i} className="bg-gray-700 p-4 rounded-md">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-400">{user.email}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p className="text-sm">Built with Bun, React & Tailwind</p>
          <div className="mt-4 flex justify-center space-x-2">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Zero Config</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Lightning Fast</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Type Safe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
