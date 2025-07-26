// hooks/useAutoModal.ts
"use client";

import { useEffect, useState } from 'react';

export function useAutoModal(delaySeconds: number) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Change from localStorage to sessionStorage
    if (sessionStorage.getItem('autoModalShown')) return;

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    let timeoutId: NodeJS.Timeout;

    const handleActivity = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsOpen(true);
        // Use sessionStorage instead
        sessionStorage.setItem('autoModalShown', 'true');
      }, delaySeconds * 1000);
    };

    timeoutId = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('autoModalShown', 'true');
    }, delaySeconds * 1000);

    activityEvents.forEach(event => {
      window.addEventListener(event, handleActivity);
    });

    return () => {
      clearTimeout(timeoutId);
      activityEvents.forEach(event => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, [delaySeconds]);

  const closeModal = () => setIsOpen(false);

  return { isOpen, closeModal };
}