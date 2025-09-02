"use client";

import { useRouter, useSearchParams } from "next/navigation";
import AttractButton from "./kokonutui/attract-button";
import TreeLottie from "./tree-lottie";
import { motion } from "motion/react";

export default function FocusTree() {
  const item = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };

  const router = useRouter();
  const searchParam = useSearchParams();

  return (
    <motion.main className="flex flex-col w-screen h-screen relative items-center justify-center">
      <motion.div
        className="size-[10rem] md:size-[28rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <TreeLottie />
      </motion.div>
      <motion.div
        variants={{
          initial: {
            ...item.initial,
            scale: 0.6,
          },
          animate: {
            ...item.animate,
            scale: 1,
            transition: {
              delay: 0.2,
              delayChildren: 0.1,
              staggerChildren: 0.3,
            },
          },
        }}
        initial={"initial"}
        animate={"animate"}
        className="space-y-2 text-center"
      >
        <motion.h2
          className="text-base md:text-4xl font-bold text-green-800 -mt-6 md:-mt-16"
          variants={item}
        >
          Time will pass anyway, make it count
        </motion.h2>
        <motion.p className="text-xs md:text-lg text-gray-700" variants={item}>
          Your future self will thank you for what you do right now.
        </motion.p>
      </motion.div>
      <motion.div
        variants={item}
        initial={"initial"}
        animate={"animate"}
        transition={{ delay: 0.5 }}
        className="mt-6 md:mt-10"
      >
        <AttractButton
          particleCount={12}
          attractRadius={15}
          onClick={() => {
            if (!searchParam.has("next")) {
              return;
            }

            router.push(searchParam.get("next") as string);
          }}
        />
      </motion.div>
    </motion.main>
  );
}
