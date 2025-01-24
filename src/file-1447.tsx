import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([])
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 p-6 rounded-xl border-2 border-dashed border-indigo-200">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Server Side</h2>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-dashed border-blue-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-3 animate-pulse">
                <div className="w-5 h-5 bg-blue-400 rounded-full"></div>
                <div className="w-5 h-5 bg-blue-400 rounded-full"></div>
                <div className="w-5 h-5 bg-blue-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white shadow-md rounded-lg p-3 transform transition-all hover:scale-105 hover:bg-blue-100 duration-200"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 italic">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  )
}
