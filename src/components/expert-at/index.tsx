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
      <div className="min-h-[calc(100vh-40vh)] flex items-start justify-center ">
        <div>
          <motion.div
            className="flex items-center justify-center flex-col"
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="text-xl mt-5 md:text-4xl mb-5" id="expert-at">
              What I&apos;m <strong>EXPERT</strong> at?
            </div>
            <div className="space-y-6">
              {/* Front End Section */}
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="text-xl font-semibold text-center md:text-left mt-3">
                  Front End:
                </span>
                <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-9 justify-center md:justify-start">
                  {iconsFrontEnd.map((Icons, index) => (
                    <RenderExpert
                      key={index}
                      Icon={Icons.icon}
                      label={Icons.label}
                    />
                  ))}
                </div>
              </div>

              {/* Back End Section */}
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="text-xl font-semibold text-center md:text-left">
                  Back End:
                </span>
                <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-9 justify-center md:justify-start">
                  {iconsBackEnd.map((Icons, index) => (
                    <RenderExpert
                      key={index}
                      Icon={Icons.icon}
                      label={Icons.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ExpertAt;
