import { useState, useEffect } from "react";

export default function BunShowcase() {
  const [data, setData] = useState<{users: any[]}>({users: []});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 animate-pulse">
            Bun + React
          </h1>
          <p className="text-xl text-gray-300">Fullstack Development at Light Speed 🚀</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Server-Side Features</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-green-500 rounded-full w-2 h-2 mr-2"></span>
                Built-in HTTP Server
              </li>
              <li className="flex items-center">
                <span className="bg-green-500 rounded-full w-2 h-2 mr-2"></span>
                TypeScript Support
              </li>
              <li className="flex items-center">
                <span className="bg-green-500 rounded-full w-2 h-2 mr-2"></span>
                SQL Database
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-violet-400">Client-Side Features</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-green-500 rounded-full w-2 h-2 mr-2"></span>
                React Components
              </li>
              <li className="flex items-center">
                <span className="bg-green-500 rounded-full w-2 h-2 mr-2"></span>
                Hot Reloading
              </li>
              <li className="flex items-center">
                <span className="bg-green-500 rounded-full w-2 h-2 mr-2"></span>
                Tailwind CSS
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20">
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-300">Live Data Feed</h2>
          <div className="space-y-4">
            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            ) : (
              data.users.map((user, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  {JSON.stringify(user)}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          <p>Powered by Bun - The all-in-one JavaScript runtime</p>
        </div>
      </div>
    </div>
  );
}
