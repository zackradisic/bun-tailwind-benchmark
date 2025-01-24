import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [serverInfo, setServerInfo] = useState({
    runtime: 'Bun',
    version: '1.1.x',
    buildTime: Date.now()
  })

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Info</h2>
            <div className="space-y-2">
              {Object.entries(serverInfo).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="font-semibold text-blue-600 capitalize">{key}:</span>
                  <span className="text-blue-800">{value.toString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Users</h2>
            {loading ? (
              <div className="flex items-center justify-center animate-pulse">
                <span className="text-purple-600">Loading users...</span>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-sm hover:bg-purple-100 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-6 rounded-full hover:from-green-500 hover:to-blue-600 transition-all transform hover:-translate-y-1 shadow-lg"
            onClick={() => window.location.reload()}
          >
            Reload Data
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-500 text-center">
        Built with ♥️ using Bun, React & Tailwind
      </div>
    </div>
  )
}
