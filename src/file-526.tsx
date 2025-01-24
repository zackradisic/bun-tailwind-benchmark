import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [serverTime, setServerTime] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time')
        const serverTimeData = await timeResponse.text()
        setServerTime(serverTimeData)

        const usersResponse = await fetch('/api/users')
        const userData = await usersResponse.json()
        setUsers(userData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-white drop-shadow-lg animate-pulse">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Status</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
                <span className="text-white/80">Current Time</span>
                <span className="font-mono text-green-300">{serverTime || 'Loading...'}</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">User Data</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2 max-h-64 overflow-y-auto">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white/10 p-3 rounded-xl text-white flex justify-between hover:bg-white/20 transition-colors"
                  >
                    <span>{user.name}</span>
                    <span className="text-blue-300">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-white/60 flex justify-center space-x-4">
          <div className="bg-white/10 px-4 py-2 rounded-full">
            🚀 Built with Bun
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-full">
            ⚛️ React + TypeScript
          </div>
        </div>
      </div>
    </div>
  )
}

export default BunFullstackDemo
