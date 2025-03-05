export const motionVariants = {
  initial: "hidden",
  animate: "visible",
  exit: "exit",
};

export const pageTransitionMotion = {
  hidden: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

export const subpageTransitionMotion = {
  hidden: {
    opacity: 0,
    x: 50,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const overlayMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.1, ease: "easeInOut" },
};

export const modalMotion = {
  hidden: { scale: 0.95 },
  visible: { scale: 1 },
  exit: { scale: 0.95 },
  transition: { duration: 0.1, ease: "easeInOut" },
};

export const dropdownMotion = (isOpen: boolean) => ({
  hidden: {
    height: 0,
    opacity: 0,
    overflow: "hidden",
    transition: { duration: 0.1, ease: "easeInOut" },
  },
  visible: {
    height: isOpen ? "auto" : 0,
    opacity: isOpen ? 1 : 0,
    overflow: isOpen ? "visible" : "hidden",
    transition: { duration: 0.1, ease: "easeInOut" },
  },
});

export const absoluteDropdownMotion = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};

export const searchMenuMotion = {
  hidden: {
    y: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const coverPageMotion = {
  hidden: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const headlessUiMotion = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};
