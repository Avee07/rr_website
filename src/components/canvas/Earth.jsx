import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  // const earth = useGLTF("./of_planes_and_satellites/scene.gltf");
  const earth = useGLTF("./stylized_mushrooms/scene.gltf");

  return (
    <primitive object={earth.scene} scale={0.9} position-y={-0.9} rotation-y={0} />
  //   <primitive
  //   object={earth.scene}
  //   scale={isMobile ? [0.5, 0.5, 0.5] : [2, 2, 2]}
  //   position={isMobile ? [0, -3, -2.2] : [0, -1, 0.1]}
  //   rotation={[-0.01, -0.2, -0.1]}
  // />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
