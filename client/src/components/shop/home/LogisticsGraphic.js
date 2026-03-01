import React from 'react';

const LogisticsGraphic = () => {
    return (
        <div className="w-full h-64 md:h-80 relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center p-8 shadow-sm">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="relative flex flex-col items-center justify-center space-y-6 z-10">
                {/* Central Pulse Icon */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                    {/* Pulsing Rings */}
                    <div className="absolute w-full h-full rounded-full bg-blue-400 opacity-10 animate-ping"></div>
                    <div className="absolute w-3/4 h-3/4 rounded-full bg-blue-500 opacity-20 animate-pulse animation-delay-700"></div>

                    {/* The Cooler/Box Icon */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-blue-200 transform hover:scale-105 transition-transform duration-300">
                        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>

                    {/* Digital Floating Stats */}
                    <div className="absolute -top-4 -right-8 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg border border-white">
                        42.1°C TEMP SAFE
                    </div>
                </div>

                {/* Logistics Flow line */}
                <div className="w-full max-w-xs h-1 bg-gray-200 rounded-full relative overflow-hidden">
                    <div className="absolute h-full bg-blue-500 rounded-full" style={{ width: '65%', animation: 'flowProgress 4s ease-in-out infinite' }}></div>
                </div>

                <div className="text-center">
                    <p className="text-blue-700 font-bold uppercase tracking-widest text-xs">Active Dispatch Matrix</p>
                    <p className="text-gray-500 text-[10px] mt-1 italic font-mono uppercase tracking-tighter">Synchronized National Fleet Relay</p>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes flowProgress {
                    0% { left: -100%; width: 100%; }
                    50% { left: 0%; width: 65%; }
                    100% { left: 100%; width: 100%; }
                }
                .animation-delay-700 {
                    animation-delay: 700ms;
                }
            `}} />
        </div>
    );
};

export default LogisticsGraphic;
