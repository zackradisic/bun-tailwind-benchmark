import { useState, useEffect } from 'react';

export default function BunDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
      setIsLoading(false);
    };
    
    const timer = setInterval(async () => {
      const res = await fetch('/api/time');
      const time = await res.text();
      setServerTime(time);
    }, 1000);

    fetchData();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-8">
            Bun + React Fullstack
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-4">Server Time</h2>
              <div className="text-4xl font-mono text-emerald-400">
                {serverTime || '00:00:00'}
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-4">Users</h2>
              {isLoading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-10 w-10 bg-white/20 rounded-full"></div>
                  <div className="flex-1 py-1">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center space-x-3 text-white">
                      <span className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-sm font-medium">
                        {user.name[0]}
                      </span>
                      <span>{user.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-8 bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-medium text-white">Built with Bun</h3>
                <p className="text-white/60 mt-1">
                  Simple, Fast, All-in-one JavaScript Runtime
                </p>
              </div>
              <div className="animate-bounce text-4xl">🥟</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
