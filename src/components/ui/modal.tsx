
"use client"
import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  width?: string;
  padding?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, isOpen, width, padding, setOpen }: ModalProps) => {
  const defaultWidth = width || "400px";
  const defaultPadding = padding || "20px";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[999] w-full bg-black/50 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            style={{ width: defaultWidth, padding: defaultPadding }}
            className="w-full drop-shadow-xl z-50 relative overflow-y-auto max-h-[90%] md:h-fit bg-white rounded-[20px]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div>{children}</div>
          </motion.div>
          <div
            onClick={() => setOpen(false)}
            className="w-full h-full absolute top-0 left-0 z-30"
          ></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;