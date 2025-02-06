import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-[1.02]">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun.js Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Server Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code className="text-blue-900">
                {`Bun.serve({
  static: { "/": homepage },
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

          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Client Side</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-3 animate-pulse">
                <div className="w-5 h-5 bg-purple-400 rounded-full"></div>
                <div className="w-5 h-5 bg-purple-400 rounded-full"></div>
                <div className="w-5 h-5 bg-purple-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-purple-100 p-3 rounded-lg shadow-sm hover:bg-purple-200 transition-colors"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://bun.sh" 
            target="_blank" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all inline-flex items-center space-x-2"
          >
            <span>Explore Bun.js</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
