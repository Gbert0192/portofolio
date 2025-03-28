"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Nextjs, JavaScript, HTML5 } from "../icons";
import RenderExpert from "../render-expert";

const ExpertAt = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const icons = [Nextjs, JavaScript, HTML5];

  return (
    <>
      <div className="min-h-[calc(100vh-20vh)] flex items-start justify-center ">
        <div>
          <motion.div
            className="flex items-center justify-center flex-col"
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="text-2xl">
              What I&apos;m <strong>EXPERT</strong> at?
            </div>
            <div className="flex items-center mx-auto m-9 gap-9">
              {icons.map((Icon, index) => (
                <RenderExpert key={index} Icon={Icon} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ExpertAt;
