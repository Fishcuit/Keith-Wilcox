import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, pics }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>

        <div className="flex flex-wrap">
          {pics &&
            pics.map((pic, index) => (
              <img
                key={index}
                src={pic}
                alt={`icon-${index}`}
                className="w-10 h-10 object-contain mx-4"
                style={{ marginBottom: "10px" }}
              />
            ))}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]  leading-[30px]"
      >
        Hi there! I'm Keith Wilcox, a statistician with a passion for Daily
        Fantasy Sports and performing insightful data analysis. I graduated from
        the University of Nevada, Reno with a Bachelor's degree in Statistics
        and a minor in Entrepreneurship. Before pursuing a career in statistics,
        I served our country for 8 years as an air traffic controller in the
        United States Navy.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]  leading-[30px]"
      >
        As a freelance React developer, I've been fortunate enough to work on a
        wide range of projects, from e-commerce platforms to social networking
        apps. I have used my skills to develop a platform focused on sports
        analytics called <a href="https://www.dfsprops.com" className="text-blue-500 hover:underline">DFSprops.com</a>. In addition to web developement, I am also
        proficient in data analysis/machine learning. I love digging into large
        datasets and applying my knowledge in statistics to extract meaningful
        insights that can help businesses make informed decisions. One of my
        favorite things to do is build models to predict stats or outcomes for
        things like sports and other things I am passionate about.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        Last but not least, I am skilled in designing captivating casino games
        that keep players coming back for more. I use my keen sense of user
        experience and my understanding of game theory to craft engaging and
        entertaining games that keep players hooked.{" "}
      </motion.p>

      <div className="my-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        When I'm not coding, you can find me exploring the great outdoors
        through rock-climbing or skiing. I am a huge fan of the NFL, NBA, NCAAF,
        and also eSports. My ultimate goal as a developer is to build products
        that make people's lives easier, more fun, and more fulfilling. If
        you're looking for a talented and passionate developer to bring your
        ideas to life, let's connect!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
