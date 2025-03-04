"use client";

import { motionVariants, pageTransitionMotion } from "@/utils/framerUtil";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...motionVariants} variants={pageTransitionMotion}>
      {children}
    </motion.div>
  );
}
