import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Map from "./Map";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-4 text-white'>
          <p className='font-medium'>Name: Keith Wilcox</p>
          <p className='font-medium'>Email: <a href="mailto:keithwilcoxdev@gmail.com" className='text-blue-500'>keithwilcoxdev@gmail.com</a></p>
          {/* <p className='font-medium'>Phone: 775-225-2895</p> */}
          <p className='font-medium'>
            Social:
            <a href="https://github.com/Fishcuit/Fishcuit" className='text-blue-500 ml-2'>GitHub</a> |
            <a href="https://www.linkedin.com/in/keith-wilcox12/" className='text-blue-500 ml-2'>LinkedIn</a> |
            <a href="https://keithwilcox.io/" className='text-blue-500 ml-2'>Portfolio</a> |
            <a href="https://www.dfsprops.com" className='text-blue-500 ml-2'>DFSProps</a>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <Map />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
