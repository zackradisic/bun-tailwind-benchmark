import React, { useState, useEffect } from 'react'

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([])
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic 🚀
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">Server-Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 space-y-4">
            <h2 className="text-2xl font-bold text-purple-800">Client-Side</h2>
            <pre className="bg-purple-100 p-4 rounded-lg text-sm overflow-auto">
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

        <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>
          {loading ? (
            <div className="flex justify-center items-center space-x-3 animate-pulse">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            </div>
          ) : (
            <ul className="space-y-2">
              {users.map(user => (
                <li 
                  key={user.id} 
                  className="bg-white shadow-md rounded-lg p-3 hover:bg-blue-50 transition-colors"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        Built with ♥️ using Bun, React & TypeScript
      </div>
    </div>
  )
}

export default BunFullstackShowcase
