import React from 'react';

const FastAndSimpleBun: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
            <h1 className="text-5xl font-bold text-center text-purple-600 mb-4 animate-pulse">
                Build Fullstack Apps with Bun Effortlessly!
            </h1>
            <p className="text-lg text-gray-700 mb-8">
                Experience blazing fast development with a modern fullstack server.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-2">Frontend & Backend</h2>
                    <p className="text-gray-600">
                        Run your frontend and backend seamlessly with no extra steps.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-2">TailwindCSS Ready!</h2>
                    <p className="text-gray-600">
                        Utilize TailwindCSS for rapid UI development with utility-first design.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-2">Simple API Handling</h2>
                    <p className="text-gray-600">
                        Effortlessly handle API requests with a clean interface.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-2">Quick Setup</h2>
                    <p className="text-gray-600">
                        Get started in seconds, focus on building your ideas, not configuration.
                    </p>
                </div>
            </div>
            <footer className="absolute bottom-5">
                <p className="text-sm text-gray-500">Powered by Bun</p>
            </footer>
        </div>
    );
};

export default FastAndSimpleBun;
