import "./style.css";
export default function BunFullstackDemo() {
  const [count, setCount] = React.useState(0);
  const [serverData, setServerData] = React.useState<string[]>([]);

  const fetchData = async () => {
    const res = await fetch('/api/data');
    const data = await res.json();
    setServerData(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack Demo
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"/>
              <span className="text-sm opacity-75">Server Connected</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Client-side Counter</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCount(c => c + 1)}
                  className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                >
                  Count: {count}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Server Data</h2>
              <button
                onClick={fetchData}
                className="px-4 py-2 rounded-lg bg-violet-500 hover:bg-violet-600 transition-colors"
              >
                Fetch Data
              </button>
              <div className="bg-black/20 rounded-lg p-4">
                <pre className="text-sm overflow-auto">
                  {JSON.stringify(serverData, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between text-sm opacity-75">
              <span>Built with Bun, React & TypeScript</span>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-2 border-indigo-900"
                    />
                  ))}
                </div>
                <span>3 Developers Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
