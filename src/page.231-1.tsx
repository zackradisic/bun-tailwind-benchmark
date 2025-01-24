import React from 'react';

const BunDemoComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <h1 className="text-4xl font-bold text-white mb-4 shadow-lg">Experience the Speed of Bun</h1>
            <p className="text-xl text-gray-200 mb-6 text-center max-w-md">
                Build fullstack applications effortlessly with Bun's new features and integrations. 
                Fast as lightning, simple as pie!
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
                <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow-lg hover:bg-gray-100 transition duration-300">
                    Get Started
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-white hover:text-blue-500 transition duration-300">
                    Learn More
                </button>
            </div>
            <footer className="absolute bottom-0 mb-4 text-gray-300">
                <p className="text-sm">Powered by Bun & Tailwind CSS</p>
            </footer>
        </div>
    );
};

export default BunDemoComponent;
