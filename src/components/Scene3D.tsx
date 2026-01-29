import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingOrb({ position, color, speed = 1, distort = 0.3, scale = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
  distort?: number;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function AtomModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const electrons = useMemo(() => {
    return [0, 1, 2].map((i) => ({
      rotation: (i * Math.PI * 2) / 3,
      speed: 1 + i * 0.3,
    }));
  }, []);

  return (
    <group ref={groupRef}>
      {/* Nucleus */}
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#22d3ee"
          distort={0.2}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
      
      {/* Electron orbits */}
      {electrons.map((electron, i) => (
        <group key={i} rotation={[electron.rotation, electron.rotation * 0.5, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2, 0.02, 16, 100]} />
            <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
          </mesh>
          <Float speed={electron.speed * 2} rotationIntensity={0} floatIntensity={0}>
            <Sphere args={[0.15, 16, 16]} position={[2, 0, 0]}>
              <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} />
            </Sphere>
          </Float>
        </group>
      ))}
    </group>
  );
}

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const helixPoints = useMemo(() => {
    const points: { pos1: THREE.Vector3; pos2: THREE.Vector3 }[] = [];
    for (let i = 0; i < 20; i++) {
      const y = (i - 10) * 0.3;
      const angle = i * 0.5;
      points.push({
        pos1: new THREE.Vector3(Math.cos(angle) * 0.8, y, Math.sin(angle) * 0.8),
        pos2: new THREE.Vector3(Math.cos(angle + Math.PI) * 0.8, y, Math.sin(angle + Math.PI) * 0.8),
      });
    }
    return points;
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {helixPoints.map((point, i) => (
        <group key={i}>
          <Sphere args={[0.12, 16, 16]} position={point.pos1.toArray()}>
            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.3} />
          </Sphere>
          <Sphere args={[0.12, 16, 16]} position={point.pos2.toArray()}>
            <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.3} />
          </Sphere>
          {i % 2 === 0 && (
            <mesh>
              <cylinderGeometry args={[0.03, 0.03, point.pos1.distanceTo(point.pos2), 8]} />
              <meshStandardMaterial color="#64748b" transparent opacity={0.5} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

interface Scene3DProps {
  variant?: 'hero' | 'atom' | 'dna' | 'orbs';
  className?: string;
}

export function Scene3D({ variant = 'hero', className = '' }: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        {variant === 'hero' && (
          <>
            <FloatingOrb position={[-2.5, 1, 0]} color="#22d3ee" speed={1.2} distort={0.4} scale={0.8} />
            <FloatingOrb position={[2.5, -0.5, -1]} color="#a855f7" speed={0.8} distort={0.5} scale={1.2} />
            <FloatingOrb position={[0, 2, -2]} color="#f97316" speed={1} distort={0.3} scale={0.6} />
            <AtomModel />
          </>
        )}
        
        {variant === 'atom' && <AtomModel />}
        
        {variant === 'dna' && <DNAHelix />}
        
        {variant === 'orbs' && (
          <>
            <FloatingOrb position={[0, 0, 0]} color="#22d3ee" speed={1} distort={0.5} scale={1.5} />
            <FloatingOrb position={[-3, 1, -2]} color="#a855f7" speed={0.7} distort={0.4} scale={0.8} />
            <FloatingOrb position={[3, -1, -1]} color="#f97316" speed={1.3} distort={0.3} scale={0.6} />
          </>
        )}
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
