import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [apiData, setApiData] = useState<{ message: string }>({ message: 'Fetching...' });

  useEffect(() => {
    const fetchServerTime = async () => {
      try {
        const response = await fetch('/api/time');
        const data = await response.json();
        setServerTime(data.time);
      } catch (error) {
        setServerTime('Error fetching time');
      }
    };

    const fetchApiData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        setApiData({ message: 'Error fetching data' });
      }
    };

    fetchServerTime();
    fetchApiData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="p-8 text-center">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Bun Fullstack Magic ✨
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-tr from-blue-50 to-indigo-100 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Server Side</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="font-semibold text-gray-700">Current Server Time:</p>
                  <p className="text-xl font-mono text-green-600">{serverTime}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-tr from-green-50 to-emerald-100 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">Client Side</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="font-semibold text-gray-700">API Response:</p>
                  <p className="text-xl font-mono text-purple-600">{apiData.message}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="font-semibold text-gray-700">React State:</p>
                  <p className="text-lg text-blue-600">Hydrated & Reactive ⚡️</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center space-x-2">
            <span>🚀 Built with</span>
            <span className="font-bold text-indigo-600">Bun</span>
            <span>•</span>
            <span className="font-bold text-blue-600">React</span>
            <span>•</span>
            <span className="font-bold text-pink-600">TypeScript</span>
          </p>
        </div>
      </div>
    </div>
  );
}
