import "./style.css";
import React, { useState, useEffect } from 'react'

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch users', error)
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight animate-pulse">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server</h2>
            <pre className="text-sm text-green-300 font-mono overflow-x-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if(req.url.endsWith("/api/users")) {
      return Response.json(await db.users.findMany())
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client</h2>
            <pre className="text-sm text-cyan-300 font-mono overflow-x-auto">
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
        
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Users</h2>
          {loading ? (
            <div className="flex justify-center items-center space-x-4 text-white animate-bounce">
              <span>Loading...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-white/30 rounded-xl p-4 transform transition-all hover:scale-105 hover:bg-white/40 duration-300"
                >
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-700">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BunFullstackDemo
