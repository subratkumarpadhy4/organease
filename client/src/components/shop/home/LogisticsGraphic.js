import React from 'react';

const LogisticsGraphic = () => {
    return (
        <div className="w-full h-[380px] relative rounded-[32px] overflow-hidden bg-[#020617] p-1 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] border border-slate-800">
            {/* Glossy Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#1e1b4b]"></div>

            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Header / Meta Bar */}
            <div className="relative z-10 flex items-center justify-between px-8 py-6">
                <div className="flex flex-col">
                    <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[3px] font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] animate-pulse"></div>
                        <span className="text-slate-400">Relay Protocol Active</span>
                    </div>
                    <div className="text-white text-lg font-medium mt-1 font-mono tracking-tight">TRANSIT_MONITOR.V2</div>
                </div>
                <div className="flex items-center -space-x-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center overflow-hidden transition-all duration-300">
                            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-500 opacity-60"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Visualizer */}
            <div className="relative z-10 flex flex-col items-center justify-center h-[180px]">
                {/* Background Radar Rings */}
                <div className="absolute w-[350px] h-[350px] border border-indigo-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-[250px] h-[250px] border border-indigo-500/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* Central DNA/Organ Stylized Visual */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                    {/* Glowing Aura */}
                    <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-[60px] animate-pulse"></div>

                    {/* Hero Graphic: Futuristic Container */}
                    <div className="relative z-20 w-32 h-32 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] flex items-center justify-center shadow-2xl group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
                        <svg className="w-16 h-16 text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            <circle cx="12" cy="11" r="3" strokeWidth={1.5} className="animate-pulse" />
                            <path d="M12 8V14M10 11H14" strokeWidth={1.5} strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Component Stats Dashboard */}
            <div className="relative z-10 px-8 py-6 grid grid-cols-3 gap-6 bg-slate-900/40 backdrop-blur-md border-t border-slate-800/50 mt-auto">
                <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Transit Status</span>
                    <div className="flex items-center space-x-2 text-indigo-300 font-mono text-sm uppercase">
                        <span className="animate-pulse">●</span>
                        <span>In Route</span>
                    </div>
                </div>
                <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Cold Chain</span>
                    <div className="text-white font-mono text-sm italic tracking-tighter">Verified 100%</div>
                </div>
                <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Signal Relay</span>
                    <div className="flex items-end space-x-0.5 mt-2 h-3">
                        <div className="w-1 h-[40%] bg-indigo-500/50"></div>
                        <div className="w-1 h-[70%] bg-indigo-500"></div>
                        <div className="w-1 h-[100%] bg-indigo-400 shadow-[0_0_5px_#818cf8]"></div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}} />
        </div>
    );
};

export default LogisticsGraphic;
