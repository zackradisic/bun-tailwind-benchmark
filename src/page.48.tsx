export default function BunFullstackDemo() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  async function fetchData() {
    setLoading(true);
    const res = await fetch("/api/data");
    const json = await res.json();
    setData(json);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Bun Fullstack App
          </h1>
          <p className="text-xl text-gray-300">
            Lightning fast fullstack React & TypeScript with zero config
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 backdrop-blur-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Server Side
            </h2>
            <pre className="bg-gray-900 rounded p-4 text-sm overflow-x-auto">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch(req) {
    if (req.url.endsWith("/api/data")) {
      return Response.json(["Fast", "Simple", "Modern"])
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 backdrop-blur-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Client Side
            </h2>
            <button
              onClick={fetchData}
              className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity mb-4"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Loading...
                </span>
              ) : (
                "Fetch Data"
              )}
            </button>
            
            <div className="space-y-2">
              {data.map((item, i) => (
                <div key={i} className="bg-gray-700 bg-opacity-50 rounded p-2 text-sm">
                  {item}  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
