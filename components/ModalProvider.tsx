// components/ModalProvider.tsx
"use client";

import AutoModal from "@/components/AutoModals";
import { useAutoModal } from "@/hooks/useAutoModal";

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { isOpen, closeModal } = useAutoModal(20); // Adjust the delay as needed
  return (
    <>
      {children}
      <AutoModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}