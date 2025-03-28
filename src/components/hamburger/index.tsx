import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type HamburgerProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="p-2 rounded-md text-black dark:text-white">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </SheetTrigger>

        <SheetContent className="w-[200px] sm:w-[200px]">
          <SheetHeader>
            <SheetTitle className="mb-5">Navigation</SheetTitle>
            <SheetDescription className="flex flex-col font-semibold gap-3">
              <Link
                href="#"
                className="flex min-h-10 items-center border-b-2 border-gray-300 hover:border-gray-400 dark:border-gray-700 transition-colors px-4"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="flex min-h-8 items-center border-b-2 border-gray-300 hover:border-gray-400 dark:border-gray-700 transition-colors px-4"
              >
                About Me
              </Link>
              <Link
                href="#"
                className="flex min-h-8 items-center border-b-2 border-gray-300 hover:border-gray-400 dark:border-gray-700 transition-colors px-4"
              >
                Project
              </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Hamburger;
