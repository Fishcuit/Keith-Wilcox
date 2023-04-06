import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { planet } from "../assets";

const Cube = () => {
  const sphereRef = useRef();

  // Create an array of six textures
  const texture = new THREE.TextureLoader().load(planet);

  const material = new THREE.MeshBasicMaterial({ map: texture });

  // Create a SphereGeometry with a radius of 1 and 32 segments
  const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

  // Create a Mesh with the SphereGeometry and the MeshBasicMaterial
  const sphere = new THREE.Mesh(sphereGeometry, material);

  // Set the position and rotation of the sphere
  sphere.position.set(0, -0.3, 0.5);
  sphere.rotation.set(0, 0, 0);

  // Add the sphere to the scene
  useFrame((state) => (sphereRef.current.rotation.y += 0.01));
  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <primitive object={sphere} />
    </mesh>
  );
};

export default Cube;
