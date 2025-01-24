export default function BunFullstackDemo() {
  const [apiResponse, setApiResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const callApi = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/hello");
      const data = await res.text();
      setApiResponse(data);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <img src="/bun.svg" className="w-16 h-16 animate-bounce" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack Demo
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">Server Ready</div>
            <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">Client Active</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Server Code</h2>
            <pre className="bg-gray-900 p-4 rounded-lg text-sm">
              {`Bun.serve({
  port: 3000,
  fetch(req) {
    if (req.url.endsWith("/api/hello"))
      return new Response("Hello from Bun!");
    return new Response("404!");
  }
});`}
            </pre>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Client Response</h2>
            <div className="bg-gray-900 p-4 rounded-lg min-h-[120px] flex items-center justify-center">
              {isLoading ? (
                <div className="animate-spin w-6 h-6 border-2 border-violet-500 border-t-transparent rounded-full" />
              ) : apiResponse ? (
                <p className="text-violet-400">{apiResponse}</p>
              ) : (
                <p className="text-gray-500">No response yet</p>
              )}
            </div>
            <button
              onClick={callApi}
              className="mt-4 w-full py-2 px-4 bg-violet-600 hover:bg-violet-700 transition-colors rounded-lg font-medium focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Call API
            </button>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-gray-800/50 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Features</h2>
            <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
              TypeScript + React
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {["Fast Bundling", "Zero Config", "TypeScript First", "ESM Support", "Built-in Server", "Modern Defaults"].map(
              (feature) => (
                <div
                  key={feature}
                  className="p-4 rounded-lg bg-gray-900/50 border border-gray-700 text-center hover:scale-105 transition-transform"
                >
                  {feature}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
