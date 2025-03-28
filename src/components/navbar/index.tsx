"use client";
import React, { useState } from "react";
import { ThemeToggle } from "../themeToggle";
import Link from "next/link";
import Hamburger from "../hamburger";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToExpertAt = () => {
    const element = document.getElementById("expert-at");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between flex-row min-h-20">
      <div className="text-[20px] font-bold m-5 ml-9 lg:text-2xl flex-1/2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Gilbert Tiofandy
        </motion.div>
      </div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        <div className="flex-row justify-center gap-9 m-5 font-semibold md:flex hidden flex-2/3 pt-1">
          <Link
            href="#expert-at"
            className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-white"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-white whitespace-nowrap"
          >
            About Me
          </Link>
          <Link
            href="#expert-at"
            onClick={scrollToExpertAt}
            className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-white whitespace-nowrap"
          >
            Expert At
          </Link>
          <Link
            href="#"
            className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-white"
          >
            Project
          </Link>
        </div>
      </motion.div>

      <div className="mr-5 flex flex-row gap-2 flex-1/2 justify-end items-center">
        <div className="md:hidden">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
