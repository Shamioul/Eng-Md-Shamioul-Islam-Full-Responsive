"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";


type TypewriterProps  = {
  texts: string[];
   design?: string;
};

export default function AnimatedText( {texts, design} : TypewriterProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-14 flex items-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={texts[index]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className={design} >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}