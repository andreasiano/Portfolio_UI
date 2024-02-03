import React from 'react';
import styles from '../style';
import portrait from '../assets/elsa-noblet-5KD5PmZEfcg-unsplash.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      id="home"
      className={`flex md:flex-row xxs:gap-8 lg:gap-20 flex-col ${styles.paddingY}`}
    >
      <div className={`flex-2 ${styles.flexStart} flex-col`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 text-[55px] text-2xl mt-5 font-dmdisplay font-regular ss:text-[52px] lg:text-[52px] lg:leading-[50px] text-white ss:leading-[60.8px] leading-[55px]">
            Building <br className="sm:block hidden" />{' '}
            <span className="text-gradient">Digital Products</span>,{' '}
          </h1>
        </div>
        <h1 className="font-regular text-[45px] font-dmdisplay ss:text-[52px] lg:text-[42px] text-white ss:leading-[60.8px] lg:leading-[50px] leading-[55px] w-full">
          Coding and More...
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] sm:text-2xl xxs:text-xl lg:text-xl mt-5`}
        >
          I am{' '}
          <span className="text-gradient font-semibold">Andrea S. Pensieri</span>, a UI UX and Product Designer with two years of experience.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} pb-6 md:my-0 my-10 relative`}
      >
        {/* Image Container with Frame Outside */}
        <div className="relative overflow-hidden rounded-xl">
          {/* Image */}
          <img
            src={portrait}
            alt="portrait"
            className="w-full h-full rounded-xl xxs:mb-30 relative z-[5]"
          />
          {/* Pseudo-elements for Frame Outside using Tailwind CSS */}
          <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-sky-200 z-20 rounded-xl pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;





