import "./style.css";
import React from 'react';

const FastAndSimpleBun: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
            <h1 className="text-5xl font-bold text-white mb-8 animate-bounce">
                Build Fullstack Apps with Bun
            </h1>
            <p className="text-xl text-gray-200 mb-4">
                Experience blazing fast performance and simplicity like never before!
            </p>
            <div className="flex space-x-4">
                <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                    Get Started
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-white hover:text-blue-500 transition duration-300">
                    Learn More
                </button>
            </div>
            <div className="mt-10 p-5 bg-white rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">Why Choose Bun?</h2>
                <ul className="list-disc list-inside">
                    <li className="text-gray-700">📦 All-in-one: Fullstack integration</li>
                    <li className="text-gray-700">⚡️ Ultra-fast development</li>
                    <li className="text-gray-700">🎨 Tailwind for beautiful designs</li>
                </ul>
            </div>
        </div>
    );
};

export default FastAndSimpleBun;
