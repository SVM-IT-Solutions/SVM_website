// components/ModalProvider.tsx
"use client";

import AutoModal from "@/components/AutoModals";
import { useAutoModal } from "@/hooks/useAutoModal";

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { isOpen, closeModal } = useAutoModal(10);
  return (
    <>
      {children}
      <AutoModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}