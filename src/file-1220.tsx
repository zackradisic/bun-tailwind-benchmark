export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Bun Fullstack
          </h1>
          <p className="text-xl text-gray-400">Build React apps at lightspeed ⚡️</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="h-4 w-4 rounded-full bg-red-500 mr-2"/>
              <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"/>
              <div className="h-4 w-4 rounded-full bg-green-500"/>
            </div>
            
            <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
              <code>{`// server.ts
Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.endsWith("/api/speed")) {
      return Response.json({
        speed: "Too fast to measure 🚀"
      });
    }
  }
});`}</code>
            </pre>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="h-4 w-4 rounded-full bg-red-500 mr-2"/>
              <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"/> 
              <div className="h-4 w-4 rounded-full bg-green-500"/>
            </div>

            <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
              <code>{`// client.tsx
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root"))
  .render(<App />);

function App() {
  const [speed, setSpeed] = useState("");
  
  useEffect(() => {
    fetch("/api/speed")
      .then(r => r.json())
      .then(data => setSpeed(data.speed));
  }, []);

  return <div>{speed}</div>;
}`}</code>
            </pre>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Just run: bun run server.ts
          </div>
        </div>

      </div>
    </div>
  )
}
