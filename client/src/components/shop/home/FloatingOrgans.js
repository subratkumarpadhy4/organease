import React from "react";

const FloatingOrgans = () => {
    return (
        <div className="w-full h-[400px] relative rounded-[32px] overflow-hidden bg-[#f8fafc] border border-slate-200 shadow-inner flex items-center justify-center">
            {/* Background soft glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400/10 blur-[100px] rounded-full"></div>

            {/* Floating Container */}
            <div className="relative w-full h-full flex items-center justify-center">

                {/* Heart */}
                <div className="absolute animate-float-slow" style={{ top: '20%', left: '20%' }}>
                    <div className="p-5 bg-white rounded-3xl shadow-xl border border-rose-50 flex flex-col items-center group transition-transform hover:scale-110">
                        <svg className="w-12 h-12 text-rose-500 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Heart</span>
                    </div>
                </div>

                {/* Kidney */}
                <div className="absolute animate-float-medium" style={{ bottom: '25%', right: '15%' }}>
                    <div className="p-5 bg-white rounded-3xl shadow-xl border border-indigo-50 flex flex-col items-center group transition-transform hover:scale-110">
                        <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M17 12C17 15.3137 14.3137 18 11 18C7.68629 18 5 15.3137 5 12C5 8.68629 7.68629 6 11 6C12.6569 6 14.1569 6.67157 15.2426 7.75736C16.3284 8.84315 17 10.3431 17 12Z" fill="currentColor" fillOpacity="0.1" />
                            <path d="M17 12C17 15.3137 14.3137 18 11 18C7.68629 18 5 15.3137 5 12C5 8.68629 7.68629 6 11 6C12.6569 6 14.1569 6.67157 15.2426 7.75736" strokeLinecap="round" />
                        </svg>
                        <span className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kidney</span>
                    </div>
                </div>

                {/* Liver */}
                <div className="absolute animate-float-fast" style={{ top: '15%', right: '25%' }}>
                    <div className="p-5 bg-white rounded-3xl shadow-xl border border-amber-50 flex flex-col items-center group transition-transform hover:scale-110">
                        <svg className="w-12 h-12 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                        </svg>
                        <span className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Liver</span>
                    </div>
                </div>

                {/* Lungs */}
                <div className="absolute animate-float-medium" style={{ bottom: '15%', left: '25%' }}>
                    <div className="p-5 bg-white rounded-3xl shadow-xl border border-blue-50 flex flex-col items-center group transition-transform hover:scale-110">
                        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M7 16C7 16 4 14 4 10C4 6 7 4 7 4" strokeLinecap="round" />
                            <path d="M17 16C17 16 20 14 20 10C20 6 17 4 17 4" strokeLinecap="round" />
                            <path d="M12 8V20" strokeLinecap="round" />
                        </svg>
                        <span className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lungs</span>
                    </div>
                </div>

                {/* Central Information */}
                <div className="text-center z-10 p-8 bg-white/40 backdrop-blur-xl rounded-full border border-white/60 shadow-2xl">
                    <div className="text-slate-800 font-black text-xl tracking-tighter">LIVE_INVENTORY</div>
                    <div className="text-indigo-600 font-mono text-[10px] tracking-widest mt-1">STATUS: OPTIMAL</div>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-medium { animation: float 4s ease-in-out infinite; animation-delay: 1s; }
        .animate-float-fast { animation: float 3s ease-in-out infinite; animation-delay: 0.5s; }
      `}} />
        </div>
    );
};

export default FloatingOrgans;
