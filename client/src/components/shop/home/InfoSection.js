import React, { Fragment } from "react";
import ThreeDModel from "./ThreeDModel"; // IMPORT THE NEW 3D COMPONENT

const InfoSection = () => {
    return (
        <Fragment>
            <section className="m-4 md:mx-8 md:my-16 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Context & The 3D Component */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                            Life-Saving Logistics, <br />
                            <span className="text-blue-600">Perfectly Timed.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            When a family agrees to donate a loved one's organs, a critical ticking clock begins. OrganIQ exists to eliminate the chaos of medical logistics, bridging the gap between donor hospitals and recipients nationwide.
                        </p>

                        {/* RENDER THE 3D INTERACTIVE CANVAS HERE */}
                        <div className="mt-4">
                            <ThreeDModel />
                        </div>
                    </div>

                    {/* Right Column: The 4 Step Process */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">How OrganIQ Works</h3>

                        {/* Step 1 */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">1</div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Medical Evaluation</h4>
                                <p className="text-sm text-gray-600">Donor hospitals run extensive blood tests, tissue typing, and virology screens to ensure the organs are medically viable and safe for transplant.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">2</div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Algorithmic Matching</h4>
                                <p className="text-sm text-gray-600">The organs are registered. OrganIQ cross-references national waitlists matching Blood Type, Tissue Compatibility, and Geographical Distance.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg">3</div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Surgical Extraction</h4>
                                <p className="text-sm text-gray-600">Highly specialized transplant surgeons extract the organs, instantly flushing them with cold preservation solution to halt cellular decay.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-lg">4</div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Rapid Airborne Transit</h4>
                                <p className="text-sm text-gray-600">Stored in smart coolers, medical couriers sprint the organs via helicopter or private jet directly to the recipient's operating room.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default InfoSection;
