"use client";

import { pageTransitionMotion } from "@/utils/framerUtil";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return <motion.div {...pageTransitionMotion}>{children}</motion.div>;
}
