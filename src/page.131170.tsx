import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Full-Stack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Side</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-3 animate-pulse">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              </div>
            ) : (
              <div className="space-y-2">
                {users.map((user, idx) => (
                  <div 
                    key={idx} 
                    className="bg-purple-100 p-3 rounded-lg text-sm transition-all hover:bg-purple-200 hover:scale-105"
                  >
                    {user.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-3 bg-green-100 px-6 py-3 rounded-full shadow-md">
            <span className="text-green-700 font-semibold">Built with</span>
            <div className="flex space-x-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">Bun</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs">React</span>
              <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
