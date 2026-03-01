import React, { Fragment } from "react";
import FloatingOrgans from "./FloatingOrgans";

const InfoSection = () => {
    return (
        <Fragment>
            <section className="mx-4 md:mx-12 my-24 bg-[#fff] rounded-[48px] overflow-hidden border border-slate-100 p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Column: Premium Visualizer */}
                    <div className="lg:col-span-12 xl:col-span-5 flex flex-col space-y-12">
                        <div className="space-y-6">
                            <span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-[12px] font-black uppercase tracking-[0.2em] border border-rose-100">
                                Global Organ Network
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[0.95] pb-2">
                                Life-Saving <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    Floating Logic.
                                </span>
                            </h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-lg">
                                When match-availability occurs, every second is a lifeline. OrganIQ leverages a decentralized floating inventory system, perfectly synchronized across medical dispatch units.
                            </p>
                        </div>

                        {/* RENDER THE FLOATING ORGANS COMPONENT */}
                        <div className="relative group">
                            <FloatingOrgans />
                            <div className="absolute -bottom-8 inset-x-8 h-8 bg-blue-500/10 blur-[40px] opacity-100 -z-10"></div>
                        </div>
                    </div>

                    {/* Right Column: Premium Progression */}
                    <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 lg:pt-0">
                        {/* Step 1 */}
                        <div className="group p-10 bg-[#f8fafc] rounded-[32px] border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black text-xl mb-6 shadow-lg shadow-indigo-200">1</div>
                            <h4 className="text-xl font-extrabold text-slate-900 mb-4">Medical Eval</h4>
                            <p className="text-slate-500 leading-relaxed font-medium">Donor hospitals run extensive virology screens and tissue typing to guarantee viability.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="group p-10 bg-[#f8fafc] rounded-[32px] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white font-black text-xl mb-6 shadow-lg shadow-blue-200">2</div>
                            <h4 className="text-xl font-extrabold text-slate-900 mb-4">Core Matching</h4>
                            <p className="text-slate-500 leading-relaxed font-medium">Our real-time matrix cross-references waitlists matching HLA profile and geography.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="group p-10 bg-[#f8fafc] rounded-[32px] border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-black text-xl mb-6 shadow-lg shadow-emerald-200">3</div>
                            <h4 className="text-xl font-extrabold text-slate-900 mb-4">Extraction</h4>
                            <p className="text-slate-500 leading-relaxed font-medium">Surgeons perform extraction, flushing organs with cold solution to halt decay instantly.</p>
                        </div>

                        {/* Step 4 */}
                        <div className="group p-10 bg-[#f8fafc] rounded-[32px] border border-transparent hover:border-rose-100 hover:bg-white hover:shadow-2xl hover:shadow-rose-500/5 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-rose-500 flex items-center justify-center text-white font-black text-xl mb-6 shadow-lg shadow-rose-200">4</div>
                            <h4 className="text-xl font-extrabold text-slate-900 mb-4">Relay Flight</h4>
                            <p className="text-slate-500 leading-relaxed font-medium">Stored in smart-coolers, organs are sprinted via private jet or helicopter to the OR.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default InfoSection;
