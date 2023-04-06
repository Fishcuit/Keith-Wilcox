import Cube from "./Cube";
import { styles } from "../style";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";



const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}style={{ zIndex: 1, position: "absolute", top: "45%", left: "40%", transform: "translate(-50%, -50%)" }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ecdd09]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <br className="sm:block hidden" /><span className="text-[#f8f527]">Keith Wilcox</span>
          </h1>
          
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-[24px] font-bold`}>
            I am a Casino Game Designer  <br className="sm:block hidden" />
            with a specialization in <br className="sm:block hidden" />
            game development and math.
          </p>
        </div>
      </div>
      

      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [3, 5, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, clearColor: "white" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      
    </section>
  );
};

export default Hero;
