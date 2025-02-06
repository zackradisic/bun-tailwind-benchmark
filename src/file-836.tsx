import "./style.css";
export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [serverResponse, setServerResponse] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  const sendRequest = async () => {
    const res = await fetch('/api/hello');
    const text = await res.text();
    setServerResponse(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack Magic ✨
          </h1>
          <p className="mt-4 text-gray-400 text-xl">Lightning fast React + TypeScript development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-500 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Server-side Features</h2>
            <div className="space-y-4">
              <button 
                onClick={sendRequest}
                className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
              >
                Test Server Endpoint
              </button>
              {serverResponse && (
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  {serverResponse}
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-pink-500 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Client-side Features</h2>
            <div className="space-y-4">
              <button
                onClick={fetchUsers}
                className="w-full py-2 px-4 bg-pink-600 hover:bg-pink-700 rounded-lg font-medium transition-colors"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Fetch Users'}
              </button>
              {users.length > 0 && (
                <div className="bg-gray-900 rounded-lg p-4">
                  <ul className="space-y-2">
                    {users.map(user => (
                      <li key={user.id} className="flex items-center space-x-2">
                        <span className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
                          {user.id}
                        </span>
                        <span>{user.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Development Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Fast Refresh', 'TypeScript', 'Tailwind CSS', 'API Routes', 'Zero Config', 'Built-in Bundling'].map(feature => (
              <div key={feature} className="bg-gray-900 rounded-lg p-4 text-center hover:bg-gray-850 transition-colors">
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
