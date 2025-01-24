import { useState, useEffect } from 'react';

export default function BunDemo() {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handlePing = async () => {
    const res = await fetch('/api/ping');
    const msg = await res.text();
    setServerMessage(msg);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Bun + React = 🚀
          </h1>
          <p className="text-xl text-gray-300">Fullstack TypeScript that just works</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Server Side</h2>
            <div className="space-y-4">
              <div className="bg-gray-900/50 p-4 rounded">
                <pre className="text-sm text-gray-300">
                  {`Bun.serve({
  fetch(req) {
    return new Response("Hello!")
  }
})`}
                </pre>
              </div>
              <button
                onClick={handlePing}
                className="w-full py-2 px-4 bg-pink-500 hover:bg-pink-600 rounded transition-colors"
              >
                Ping Server
              </button>
              {serverMessage && (
                <div className="bg-gray-900/50 p-4 rounded">
                  <p className="text-green-400">{serverMessage}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-violet-400">Client Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 bg-gray-700/50 rounded w-full"></div>
                </div>
              ) : (
                <div className="bg-gray-900/50 p-4 rounded">
                  <ul className="space-y-2">
                    {users.map((user, i) => (
                      <li key={i} className="text-gray-300">{user}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="text-sm text-gray-400">
                Data fetched from <code className="bg-gray-900/50 px-2 py-1 rounded">/api/users</code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Built with TypeScript + React + Tailwind, served by Bun
          </p>
        </div>
      </div>
    </div>
  );
}
