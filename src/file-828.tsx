import "./style.css";
import React from 'react';

const BunDemo: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <h1 className="text-6xl font-bold text-white mb-4 animate-bounce">
                Build Fullstack Apps with Bun!
            </h1>
            <p className="text-2xl text-white mb-8">
                Fast, simple, and efficient.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <h2 className="text-4xl font-semibold mb-2 text-center">Get Started</h2>
                <ul className="list-disc list-inside">
                    <li className="text-lg text-gray-700">💻 Easy HTML imports</li>
                    <li className="text-lg text-gray-700">⚡️ Fast bundling in development</li>
                    <li className="text-lg text-gray-700">🔄 Fullstack capabilities</li>
                </ul>
            </div>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More!
            </button>
        </div>
    );
};

export default BunDemo;
