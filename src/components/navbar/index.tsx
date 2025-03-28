"use client";
import React, { useState } from "react";
import { ThemeToggle } from "../themeToggle";
import Link from "next/link";
import Hamburger from "../hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between flex-row min-h-20">
      <div className="text-[20px] font-bold m-5 ml-9 lg:text-2xl flex-1/2">
        Gilbert Tiofandy
      </div>

      <div className="flex-row justify-center gap-9 m-5 font-semibold md:flex hidden flex-2/3 pt-1">
        <Link
          href="#"
          className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-white"
        >
          Contact
        </Link>
        <Link
          href="#"
          className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-white"
        >
          About Me
        </Link>
        <Link
          href="#"
          className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-white"
        >
          Project
        </Link>
      </div>

      <div className="mr-5 flex flex-row gap-2 flex-1/2 justify-end items-center">
        <div className="md:hidden">
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
