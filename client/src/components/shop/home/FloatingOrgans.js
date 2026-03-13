import React from "react";

const FloatingOrgans = () => {
    return (
        <div className="w-full h-[600px] md:h-[700px] relative overflow-visible flex items-center justify-center">
            {/* Background massive glowing aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full"></div>

            {/* Central Pulsing Network Core */}
            <div className="absolute w-[400px] h-[400px] border border-blue-500/10 rounded-full animate-pulse scale-150 opacity-20"></div>

            {/* Floating Container */}
            <div className="relative w-full h-full flex items-center justify-center">

                {/* Heart - Massive */}
                <div className="absolute animate-float-slow" style={{ top: '10%', left: '10%' }}>
                    <div className="p-10 bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border border-rose-100 flex flex-col items-center group transition-all duration-500 hover:scale-110 hover:-rotate-3">
                        <svg className="w-24 h-24 text-rose-500 drop-shadow-[0_0_20px_rgba(244,63,94,0.3)] animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className="mt-4 text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Critical Heart Pulse</span>
                    </div>
                </div>

                {/* Kidney - Large */}
                <div className="absolute animate-float-medium" style={{ bottom: '5%', right: '5%' }}>
                    <div className="p-10 bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border border-indigo-100 flex flex-col items-center group transition-all duration-500 hover:scale-110 hover:rotate-3">
                        <svg className="w-24 h-24 text-indigo-500 drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M17 12C17 15.3137 14.3137 18 11 18C7.68629 18 5 15.3137 5 12C5 8.68629 7.68629 6 11 6C12.6569 6 14.1569 6.67157 15.2426 7.75736C16.3284 8.84315 17 10.3431 17 12Z" fill="currentColor" fillOpacity="0.1" />
                            <path d="M17 12C17 15.3137 14.3137 18 11 18C7.68629 18 5 15.3137 5 12C5 8.68629 7.68629 6 11 6" strokeLinecap="round" />
                        </svg>
                        <span className="mt-4 text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Synchronized Kidney</span>
                    </div>
                </div>

                {/* Liver - Large */}
                <div className="absolute animate-float-fast" style={{ top: '5%', right: '15%' }}>
                    <div className="p-10 bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border border-amber-100 flex flex-col items-center group transition-all duration-500 hover:scale-110 hover:-rotate-2">
                        <svg className="w-24 h-24 text-amber-600 drop-shadow-[0_0_20px_rgba(217,119,6,0.2)]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                        </svg>
                        <span className="mt-4 text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Hepatic Sync</span>
                    </div>
                </div>

                {/* Lungs - Large */}
                <div className="absolute animate-float-medium" style={{ bottom: '10%', left: '15%' }}>
                    <div className="p-10 bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border border-blue-100 flex flex-col items-center group transition-all duration-500 hover:scale-110 hover:rotate-2">
                        <svg className="w-24 h-24 text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M7 16C7 16 4 14 4 10C4 6 7 4 7 4" strokeLinecap="round" />
                            <path d="M17 16C17 16 20 14 20 10C20 6 17 4 17 4" strokeLinecap="round" />
                            <path d="M12 8V20" strokeLinecap="round" />
                        </svg>
                        <span className="mt-4 text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Oxygenated Core</span>
                    </div>
                </div>

                {/* Central Information - Massive Glow */}
                <div className="text-center z-10 p-16 bg-white/20 backdrop-blur-3xl rounded-[60px] border border-white/40 shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[80px] -z-10"></div>
                    <div className="text-slate-900 font-black text-4xl tracking-tighter">GLOBAL_MATRIX</div>
                    <div className="text-indigo-600 font-mono text-sm font-bold tracking-[0.5em] mt-2">REAL_TIME_ORCHESTRATION</div>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fullFloat {
          0%, 100% { transform: translate(0, 0) rotate(0); }
          25% { transform: translate(15px, -35px) rotate(1deg); }
          50% { transform: translate(-20px, -60px) rotate(-1deg); }
          75% { transform: translate(-30px, -25px) rotate(0.5deg); }
        }
        .animate-float-slow { animation: fullFloat 12s ease-in-out infinite; }
        .animate-float-medium { animation: fullFloat 8s ease-in-out infinite; animation-delay: 2s; }
        .animate-float-fast { animation: fullFloat 6s ease-in-out infinite; animation-delay: 1s; }
      `}} />
        </div>
    );
};

export default FloatingOrgans;
