import React from 'react';

const ThreeDModel = () => {
    return (
        <div className="w-full h-64 md:h-96 relative rounded-xl overflow-hidden flex items-center justify-center shadow-inner" style={{ backgroundColor: '#0f172a' }}> {/* Slate 900 */}

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full" style={{ backgroundColor: '#2563eb', filter: 'blur(60px)', opacity: 0.25, animation: 'corePulse 4s infinite' }}></div>
            </div>

            {/* HTML/CSS Simulated 3D Core Structure */}
            <div className="relative w-40 h-40 flex items-center justify-center" style={{ perspective: '1000px' }}>

                {/* Outer Ring 1 */}
                <div className="absolute w-full h-full rounded-full" style={{ border: '2px solid rgba(59, 130, 246, 0.2)', borderTop: '2px solid #3b82f6', borderBottom: '2px solid #3b82f6', animation: 'spin 8s linear infinite' }}></div>

                {/* Outer Ring 2 (Offset 3D Tilt) */}
                <div className="absolute w-full h-full" style={{ transform: 'rotateX(60deg) rotateY(45deg)', transformStyle: 'preserve-3d' }}>
                    <div className="w-full h-full rounded-full" style={{ border: '2px solid rgba(99, 102, 241, 0.2)', borderLeft: '2px solid #6366f1', borderRight: '2px solid #6366f1', animation: 'spin 12s linear infinite reverse' }}></div>
                </div>

                {/* Outer Ring 3 (Multi-axis 3D Tilt) */}
                <div className="absolute w-full h-full" style={{ transform: 'rotateX(-60deg) rotateZ(30deg)', transformStyle: 'preserve-3d' }}>
                    <div className="w-full h-full rounded-full" style={{ border: '2px solid rgba(34, 211, 238, 0.2)', borderTop: '2px solid #22d3ee', animation: 'spin 10s linear infinite' }}></div>
                </div>

                {/* Inner Beating 'Cell Core' */}
                <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #3730a3 100%)', boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)', animation: 'corePulse 1.5s infinite' }}>
                    <div className="absolute bg-white rounded-full opacity-20" style={{ width: '80%', height: '80%', top: '10%', left: '10%', transform: 'translate(-2px, -2px)' }}></div>
                </div>

            </div>

            {/* Sci-Fi Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="absolute bottom-4 left-6 pointer-events-none flex flex-col z-20">
                <span className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: '#60a5fa' }}>
                    Live Diagnostics
                </span>
                <span className="text-white text-sm font-semibold tracking-wider opacity-90 uppercase">
                    Organ Core Matrix
                </span>
            </div>

            {/* Status indicators */}
            <div className="absolute top-4 right-6 pointer-events-none flex flex-col items-end space-y-2 z-20">
                <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono" style={{ color: '#93c5fd' }}>SYS.ONLINE</span>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4ade80', boxShadow: '0 0 8px #4ade80', animation: 'corePulse 2s infinite' }}></div>
                </div>
            </div>

            {/* Inline Keyframes to ensure it runs independently of global CSS files */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes corePulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(0.95); }
                }
            `}} />
        </div>
    );
};

export default ThreeDModel;
