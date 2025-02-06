import "./style.css";
import React from 'react';

const FastAndSimpleBun: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-500 mb-6">Build Fullstack Apps with Bun</h1>
            <p className="text-lg text-gray-700 mb-4">Experience the speed and simplicity of Bun for fullstack development.</p>
            <div className="flex flex-wrap gap-4">
                <div className="p-6 bg-white shadow-md rounded-lg w-64">
                    <h2 className="text-2xl font-semibold text-green-600">Frontend</h2>
                    <p className="text-gray-600">Import HTML and run your frontend effortlessly!</p>
                </div>
                <div className="p-6 bg-white shadow-md rounded-lg w-64">
                    <h2 className="text-2xl font-semibold text-yellow-500">Backend</h2>
                    <p className="text-gray-600">Handle API requests with elegant simplicity.</p>
                </div>
                <div className="p-6 bg-white shadow-md rounded-lg w-64">
                    <h2 className="text-2xl font-semibold text-purple-700">Integration</h2>
                    <p className="text-gray-600">Combine frontend and backend seamlessly.</p>
                </div>
            </div>
            <button className="mt-8 py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
                Get Started with Bun
            </button>
        </div>
    );
};

export default FastAndSimpleBun;
