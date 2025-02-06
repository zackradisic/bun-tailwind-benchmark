import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-indigo-50 rounded-2xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Server Side</h2>
            <pre className="bg-indigo-100 p-4 rounded-xl text-sm overflow-x-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    const users = await Bun.sql\`SELECT * FROM users\`
    return Response.json(users)
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 rounded-2xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-purple-700">Client Side</h2>
            <pre className="bg-purple-100 p-4 rounded-xl text-sm overflow-x-auto">
              {`const App = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers)
  }, [])
}`}
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Users Data
          </h3>
          
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
              <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
              <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {users.map((user, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-4 rounded-xl shadow-md hover:bg-blue-50 transition-colors"
                >
                  <p className="font-semibold text-gray-700">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 opacity-70">
        Built with 🔥 Bun, React & TypeScript
      </div>
    </div>
  )
}
