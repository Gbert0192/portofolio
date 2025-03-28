"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  Nextjs,
  JavaScript,
  HTML5,
  CSS,
  TailwindCSS,
  Expressjs,
  MySQL,
  Fastify,
  PostgreSQL,
  Bootstrap,
} from "../icons";
import RenderExpert from "../render-expert";

const ExpertAt = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const iconsFrontEnd = [
    { label: "Next.js", icon: Nextjs },
    { label: "JavaScript", icon: JavaScript },
    { label: "HTML5", icon: HTML5 },
    { label: "CSS3", icon: CSS },
    { label: "Tailwind CSS", icon: TailwindCSS },
    { label: "Bootstrap CSS", icon: Bootstrap },
  ];

  const iconsBackEnd = [
    { label: "Express", icon: Expressjs },
    { label: "Fastify", icon: Fastify },
    { label: "MySQL", icon: MySQL },
    { label: "PostgreSQL", icon: PostgreSQL },
  ];

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
            <div className="text-4xl">
              What I&apos;m <strong>EXPERT</strong> at?
            </div>
            <div className="flex  mx-auto m-9 gap-9 flex-col">
              <div className="flex flex-row gap-9 items-center justify-center flex-wrap">
                <span className="text-xl font-semibold">Front End: </span>
                {iconsFrontEnd.map((Icons, index) => (
                  <RenderExpert
                    key={index}
                    Icon={Icons.icon}
                    label={Icons.label}
                  />
                ))}
              </div>
              <div className="flex flex-row gap-9 items-center flex-wrap">
                <span className="text-xl font-semibold">Back End: </span>
                {iconsBackEnd.map((Icons, index) => (
                  <RenderExpert
                    key={index}
                    Icon={Icons.icon}
                    label={Icons.label}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ExpertAt;
