"use client";

import { motionVariants, subpageTransitionMotion } from "@/utils/framerUtil";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...motionVariants} variants={subpageTransitionMotion}>
      {children}
    </motion.div>
  );
}
