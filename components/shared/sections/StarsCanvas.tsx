"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import {
  Vector3,
  BufferGeometry,
  Points as ThreePoints,
  Material,
} from "three";

interface StarsProps {
  [key: string]: any;
}

const generateSphere = (pointCount: number, radius: number) => {
  const positions = new Float32Array(pointCount * 3);
  for (let i = 0; i < pointCount; i++) {
    const vertex = new Vector3(
      (Math.random() * 2 - 1) * radius,
      (Math.random() * 2 - 1) * radius,
      (Math.random() * 2 - 1) * radius
    );
    vertex.normalize().multiplyScalar(radius);
    positions[i * 3] = vertex.x;
    positions[i * 3 + 1] = vertex.y;
    positions[i * 3 + 2] = vertex.z;
  }
  return positions;
};

const Stars: React.FC<StarsProps> = (props) => {
  const ref = useRef<ThreePoints<BufferGeometry, Material>>(null);
  const [sphere, setSphere] = useState<Float32Array | null>(null);

  useEffect(() => {
    const generatedSphere = generateSphere(5000, 1.2);

    setSphere(generatedSphere);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  if (!sphere) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff" // White color for the stars
          size={0.01} // Increase the size of the points
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsWideScreen(window.innerWidth > 767);
      };

      // Set the initial state
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <>
      {isWideScreen && (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
              <Stars />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      )}
    </>
  );
};

export default StarsCanvas;
