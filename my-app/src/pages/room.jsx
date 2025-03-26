// something is wrong with the dependancies im trying to load to use 3d modeling ... will try again soon 
// 3d model of room with spotify playing and books im reading or whatever else i want to add (meant to be a fun page)

import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from 'three';

function Model({ url }) {
    const { scene } = useGLTF(url);
    
    React.useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [scene]);

    return <primitive object={scene} scale={1} />;
}

export function Room() {  // Note: default export
    return (
        <div style={{ 
            width: '100%', 
            height: '500px', 
            position: 'relative' 
        }}>
            <Suspense fallback={<div>Loading 3D Model...</div>}>
                <Canvas 
                    camera={{ position: [0, 2, 5], fov: 50 }}
                    shadows
                    gl={{ 
                        antialias: true,
                        toneMapping: THREE.ACESFilmicToneMapping,
                        outputColorSpace: THREE.SRGBColorSpace
                    }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight 
                        position={[2, 2, 2]} 
                        intensity={1.5} 
                        castShadow 
                    />
                    <Environment preset="sunset" />
                    <Model url="/bedroom.glb" />
                    <OrbitControls />
                </Canvas>
            </Suspense>
        </div>
    );
}

// Preload the model (optional but recommended)
useGLTF.preload("/bedroom.glb");