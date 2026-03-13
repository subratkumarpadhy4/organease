import React, { Fragment } from "react";
import FloatingOrgans from "./FloatingOrgans";

const InfoSection = () => {
    return (
        <Fragment>
            <section className="mx-4 md:mx-12 my-24 overflow-visible">
                <div className="max-w-[1600px] mx-auto min-h-[900px] flex flex-col items-center justify-center relative">

                    {/* Background massive glowing aura */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] bg-indigo-500/5 blur-[180px] -z-20"></div>

                    {/* Top Concentrated Header */}
                    <div className="text-center space-y-4 mb-32 max-w-2xl px-4 animate-fade-in relative z-20">
                        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-blue-100 shadow-sm">
                            Surgical Precision Logistics
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                            Life-Saving <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Perfectly Timed.</span>
                        </h2>
                    </div>

                    {/* Massive visualizer covering more than half the window */}
                    <div className="w-full relative z-10 scale-110 md:scale-125 lg:scale-150 transform transition-transform duration-1000">
                        <FloatingOrgans />
                    </div>

                    {/* Bottom minimal features - decorative support */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-32 max-w-4xl w-full px-4 relative z-20">
                        {[
                            { id: '01', title: 'Medical Eval', color: 'bg-rose-500' },
                            { id: '02', title: 'Matrix Match', color: 'bg-indigo-500' },
                            { id: '03', title: 'Extraction', color: 'bg-emerald-500' },
                            { id: '04', title: 'Relay Relay', color: 'bg-blue-500' }
                        ].map((item) => (
                            <div key={item.id} className="p-6 bg-white/70 backdrop-blur-md border border-slate-100 rounded-3xl hover:shadow-2xl transition-all group flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-[10px] font-black mb-3 shadow-lg group-hover:scale-110 transition-transform`}>{item.id}</div>
                                <h5 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{item.title}</h5>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
            `}} />
        </Fragment>
    );
};

export default InfoSection;
