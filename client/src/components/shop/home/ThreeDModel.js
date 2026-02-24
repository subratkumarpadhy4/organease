import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedShape = () => {
    const mesh = useRef();

    // Rotate the mesh subtly every frame
    useFrame(() => {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
    });

    return (
        <Sphere visible args={[1, 100, 200]} scale={2} ref={mesh}>
            {/* 
        MeshDistortMaterial gives the sphere an organic, pulsing 'cell-like' look 
        which fits the medical/organ theme perfectly.
      */}
            <MeshDistortMaterial
                color="#3b82f6"       /* Tailwind Blue-500 */
                attach="material"
                distort={0.4}         /* How much it wobbles (0 = perfect sphere) */
                speed={1.5}           /* How fast it pulses */
                roughness={0.2}       /* Makes it look slightly shiny/glassy */
            />
        </Sphere>
    );
};

const ThreeDModel = () => {
    return (
        <div className="w-full h-64 md:h-96 relative rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-blue-900 flex items-center justify-center filter drop-shadow-2xl">
            <Canvas>
                <ambientLight intensity={0.5} />
                {/* Directional light to give the shape nice shadows/highlights */}
                <directionalLight position={[2, 5, 2]} intensity={1.5} />
                <AnimatedShape />
                {/* Allow users to interact and drag the shape around */}
                <OrbitControls enableZoom={false} />
            </Canvas>
            {/* Overlay Text */}
            <div className="absolute bottom-4 left-6 pointer-events-none">
                <span className="text-white text-sm font-semibold tracking-wider opacity-80 uppercase">
                    Interactable Cell Structure
                </span>
            </div>
        </div>
    );
};

export default ThreeDModel;
