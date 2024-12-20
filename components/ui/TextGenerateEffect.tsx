"use client";
import React, { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  flipWordsList = [],
  duration = 3000,
  className,
}: {
  words: string;
  flipWordsList: string[][]; // List of arrays with alternate flip words
  duration?: number;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [flipIndexes, setFlipIndexes] = useState<number[]>([]);
  const wordsArray = words.split(" ");

  useEffect(() => {
    // Initial animation for staggered appearance
    animate(
      "span",
      { opacity: 1 },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );

    // Start flipping only for specific words
    const interval = setInterval(() => {
      setFlipIndexes((prev) =>
        prev.map((index, idx) => (index + 1) % flipWordsList[idx].length)
      );
    }, duration);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [animate, duration, flipWordsList]);

  useEffect(() => {
    // Initialize flip indexes with zero for each flip word
    setFlipIndexes(flipWordsList.map(() => 0));
  }, [flipWordsList]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const flipIndex = idx - (wordsArray.length - flipWordsList.length); // Adjust index for flip words
          const isFlipWord = flipIndex >= 0 && flipIndex < flipWordsList.length;
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "opacity-0",
                isFlipWord ? "text-purple" : "dark:text-white text-black"
              )}
            >
            {isFlipWord ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                }}
                key={flipIndexes[flipIndex]} // Unique key for React
              >
                {flipWordsList[flipIndex][flipIndexes[flipIndex]]}
              </motion.div>
              ) : (
                word
              )}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};