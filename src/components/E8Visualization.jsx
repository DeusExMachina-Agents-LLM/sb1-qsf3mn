import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { matrix, multiply } from 'mathjs';
import { H4FOLD_MATRIX, E8_SRE_MATRIX, PARTICLE_ASSIGNMENTS } from '../constants';

function E8Structure() {
  const pointsRef = useRef();

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.001;
      pointsRef.current.rotation.y += 0.001;
    }
  });

  const e8Vertices = calculateE8Vertices();
  const geometry = new THREE.BufferGeometry();
  
  const positions = [];
  const colors = [];
  const sizes = [];

  e8Vertices.forEach((vertex, index) => {
    const particle = PARTICLE_ASSIGNMENTS[index % PARTICLE_ASSIGNMENTS.length];
    const [x, y, z] = projectTo3D(vertex);
    
    positions.push(x, y, z);
    colors.push(...getParticleColor(particle));
    sizes.push(getParticleSize(particle));
  });

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry" {...geometry} />
      <pointsMaterial
        attach="material"
        vertexColors
        size={0.05}
        sizeAttenuation
        transparent
        alphaTest={0.5}
        alphaMap={new THREE.TextureLoader().load('/textures/circle.png')}
      />
    </points>
  );
}

function FlowerOfLife() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(7)].map((_, i) => (
        <line key={i} rotation={[0, 0, (Math.PI / 3) * i]}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attachObject={['attributes', 'position']}
              count={65}
              array={new Float32Array(
                [...Array(65)].map((_, j) => [
                  Math.cos((j / 32) * Math.PI) * 2,
                  Math.sin((j / 32) * Math.PI) * 2,
                  0,
                ]).flat()
              )}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial attach="material" color="white" />
        </line>
      ))}
    </group>
  );
}

function KatharaGrid() {
  return (
    <group>
      {[...Array(12)].map((_, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attachObject={['attributes', 'position']}
              count={2}
              array={new Float32Array([
                Math.cos((Math.PI / 6) * i) * 3,
                Math.sin((Math.PI / 6) * i) * 3,
                0,
                Math.cos((Math.PI / 6) * (i + 6)) * 3,
                Math.sin((Math.PI / 6) * (i + 6)) * 3,
                0,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial attach="material" color="yellow" />
        </line>
      ))}
    </group>
  );
}

function E8Visualization() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <color attach="background" args={['#1e1e1e']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <E8Structure />
      <FlowerOfLife />
      <KatharaGrid />
      <OrbitControls />
    </Canvas>
  );
}

function calculateE8Vertices() {
  const e8Matrix = matrix(E8_SRE_MATRIX);
  const h4Matrix = matrix(H4FOLD_MATRIX);
  return multiply(e8Matrix, h4Matrix).toArray();
}

function projectTo3D(vertex) {
  // Simple projection, you may want to implement a more sophisticated method
  return [vertex[0], vertex[1], vertex[2]];
}

function getParticleColor(particle) {
  const colors = {
    boson: [1, 0, 0],
    fermion: [0, 1, 0],
    // Add more particle types and colors as needed
  };
  return colors[particle.type] || [Math.random(), Math.random(), Math.random()];
}

function getParticleSize(particle) {
  const sizes = {
    boson: 0.08,
    fermion: 0.05,
    // Add more particle types and sizes as needed
  };
  return sizes[particle.type] || 0.05;
}

export default E8Visualization;