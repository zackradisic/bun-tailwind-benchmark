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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-4xl p-8 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-white text-center mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/50 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Server</h2>
            <pre className="text-sm text-white/70 bg-black/20 p-4 rounded-lg">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/50 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Client</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 text-white">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
                <span>Loading...</span>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white/10 p-3 rounded-lg text-white hover:bg-white/20 transition-all"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://bun.sh" 
            target="_blank" 
            className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/40 transition-all inline-flex items-center space-x-2"
          >
            <span>Powered by Bun</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0S8.55 3.79 8.55 7.34c0 2.94 2.4 5.33 5.45 5.33s5.45-2.39 5.45-5.33C19.45 3.79 16 0 16 0s-3.45 3.79-3.45 7.34c0 2.94 2.4 5.33 5.45 5.33s5.45-2.39 5.45-5.33C23.45 3.79 20 0 20 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BunFullstackDemo
