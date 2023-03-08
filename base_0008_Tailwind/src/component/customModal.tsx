import { ReactNode } from "react";

// props
type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

export default function Modal({ isOpen, children, ...p }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 bg-opacity-50 bg-black w-full h-full flex items-center justify-center z-[10]">
      {children}
    </div>
  );
}
