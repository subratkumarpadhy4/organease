import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDModel = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let width = mountRef.current.clientWidth;
        let height = mountRef.current.clientHeight;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 4;

        let renderer;
        let controls;

        try {
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            renderer.setPixelRatio(window.devicePixelRatio);
            mountRef.current.appendChild(renderer.domElement);

            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableZoom = false;
            controls.enablePan = false;
        } catch (error) {
            console.error("WebGL context could not be created:", error);
            if (mountRef.current) {
                mountRef.current.innerHTML = '<div class="flex items-center justify-center w-full h-full text-white text-center p-4">WebGL is block or unsupported on this device. Please enable Hardware Acceleration.</div>';
            }
            return; // Halt 3D rendering
        }

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(2, 5, 2);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0x3b82f6, 2, 10);
        pointLight.position.set(0, 0, 0);
        scene.add(pointLight);

        // Geometry - Outer Wireframe Cell
        const outerGeo = new THREE.IcosahedronGeometry(2, 4);
        const outerMat = new THREE.MeshStandardMaterial({
            color: 0x60a5fa, // Light blue
            wireframe: true,
            transparent: true,
            opacity: 0.3
        });
        const outerMesh = new THREE.Mesh(outerGeo, outerMat);
        scene.add(outerMesh);

        // Geometry - Inner Solid Core
        const innerGeo = new THREE.IcosahedronGeometry(1.5, 4);
        const innerMat = new THREE.MeshStandardMaterial({
            color: 0x1e3a8a, // Dark blue core
            roughness: 0.2,
            metalness: 0.8
        });
        const innerMesh = new THREE.Mesh(innerGeo, innerMat);
        outerMesh.add(innerMesh);

        let frameId;
        let clock = new THREE.Clock();

        const animate = () => {
            frameId = requestAnimationFrame(animate);

            const time = clock.getElapsedTime();

            // Gentle floating rotation
            outerMesh.rotation.x += 0.003;
            outerMesh.rotation.y += 0.005;

            innerMesh.rotation.y -= 0.002;

            // Organic Pulsing effect (simulated heartbeat / cell breathing)
            const scale = 1 + Math.sin(time * 1.5) * 0.04;
            outerMesh.scale.set(scale, scale, scale);

            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            if (!mountRef.current) return;
            width = mountRef.current.clientWidth;
            height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
            if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            outerGeo.dispose();
            outerMat.dispose();
            innerGeo.dispose();
            innerMat.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div className="w-full h-64 md:h-96 relative rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-blue-900 flex items-center justify-center filter drop-shadow-2xl">
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
            <div className="absolute bottom-4 left-6 pointer-events-none">
                <span className="text-white text-sm font-semibold tracking-wider opacity-80 uppercase">
                    Interactable Cell Structure
                </span>
            </div>
        </div>
    );
};

export default ThreeDModel;
