"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  return (
    <div className="flex items-center min-h-[calc(100vh-5rem)] max-w-[70vw] justify-center mx-auto">
      <div className="flex flex-col items-center gap-9 lg:flex-row">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/icebear.jpg"
            alt="main-page-picture"
            width={400}
            height={400}
            className="rounded-lg max-w-[300px] w-full h-auto min-w-[300px]"
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-2 ">
            <h1 className="text-4xl md:text-6xl">
              <strong>Hellow.. I am Gilbert Tiofandy,</strong>
            </h1>
            <div className="max-w-150">
              <Typewriter
                words={[
                  "I'm a Computer Science student. I have a strong passion for programming and have been learning and working with various programming languages and technologies. I am always eager to learn and explore new things in the world of technology.\nI like watching Korean drama and doing some coding projects.",
                ]}
                loop={false}
                typeSpeed={10}
                cursor
                cursorStyle="|"
                cursorBlinking
                delaySpeed={999999999}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
