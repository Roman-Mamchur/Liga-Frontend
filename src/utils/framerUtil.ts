export const pageTransitionMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

export const subpageTransitionMotion = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

export const overlayMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.1, ease: "easeInOut" },
};

export const modalMotion = {
  initial: { scale: 0.95 },
  animate: { scale: 1 },
  exit: { scale: 0.95 },
  transition: { duration: 0.1, ease: "easeInOut" },
};

export const dropdownMotion = (isOpen: boolean) => ({
  initial: { height: 0, opacity: 0, overflow: "hidden" },
  animate: {
    height: isOpen ? "auto" : 0,
    opacity: isOpen ? 1 : 0,
    overflow: isOpen ? "visible" : "hidden",
  },
  transition: { duration: 0.1, ease: "easeInOut" },
});

export const absoluteDropdownMotion = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.1, ease: "easeInOut" },
};

export const searchMenuMotion = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
}

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
