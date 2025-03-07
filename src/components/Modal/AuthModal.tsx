"use client";

import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { modalMotion, motionVariants, overlayMotion } from "@/utils/framerUtil";
import { useRouter } from "@/i18n/routing";

const AuthModal = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  return (
    <AnimatePresence>
      <div>
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center md:bg-black/80"
          key="overlay"
          {...motionVariants}
          variants={overlayMotion}
        >
          <motion.div
            className="relative flex h-full w-full flex-col bg-white shadow-lg md:max-h-[90vh] md:w-8/12 md:rounded-lg lg:w-6/12"
            key="modal"
            {...motionVariants}
            variants={modalMotion}
          >
            <div className="flex items-center justify-between p-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="h-10 w-auto"
              />
              <button
                className="text-gray-500 duration-200 hover:text-gray-800"
                onClick={() => router.back()}
              >
                <FaXmark className="size-5" />
              </button>
            </div>
            <div className="w-full border ring-gray-500"></div>

            {children}
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AuthModal;
