import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackshowcase() {
  const [serverTime, setServerTime] = useState<string>('Loading...')
  const [users, setUsers] = useState<{ id: number, name: string }[]>([])

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const timeResponse = await fetch('/api/time')
        const timeData = await timeResponse.text()
        setServerTime(timeData)

        const usersResponse = await fetch('/api/users')
        const usersData = await usersResponse.json()
        setUsers(usersData)
      } catch (error) {
        console.error('Failed to fetch data', error)
      }
    }

    fetchServerData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 shadow-inner">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">Server Details</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="mr-2 text-green-400">⏰</span>
                <span className="font-semibold">Server Time:</span> 
                <span className="ml-2 text-yellow-300">{serverTime}</span>
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 shadow-inner">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">Users</h2>
            <ul className="space-y-2">
              {users.map(user => (
                <li 
                  key={user.id} 
                  className="bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-blue-600/50 px-6 py-3 rounded-full text-sm font-medium animate-pulse">
            Built with Bun, React & TypeScript 🚀
          </div>
        </div>
      </div>
    </div>
  )
}
