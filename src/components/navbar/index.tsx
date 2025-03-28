import React from "react";
import { ThemeToggle } from "../themeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between flex-row min-h-20">
      <div className="text-2xl font-bold m-5">Gilbert Tiofandy</div>
      <div className="flex flex-row justify-between gap-6 m-5 font-semibold">
        <p>Contact</p>
        <p>About Me</p>
        <p>Project</p>
      </div>
      <div className="m-5">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
