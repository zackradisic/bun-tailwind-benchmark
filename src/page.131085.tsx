import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Server Side */}
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Server-Side 🌐
            </h2>
            <pre className="bg-blue-100 p-4 rounded-md text-sm overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await db.getUsers()
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>

          {/* Client Side */}
          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Client-Side 🖥️
            </h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              </div>
            ) : (
              <div className="space-y-2">
                {users.map((user, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-3 rounded-lg shadow-md flex items-center space-x-4 transform transition-all hover:scale-105 hover:bg-purple-100"
                  >
                    <div className="w-10 h-10 bg-purple-300 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-purple-800">{user.name}</p>
                      <p className="text-sm text-purple-600">{user.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg font-bold animate-bounce">
            Bun: Full Stack Simplified! 🚀
          </div>
        </div>
      </div>
    </div>
  )
}
