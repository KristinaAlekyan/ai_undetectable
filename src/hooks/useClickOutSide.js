import { useEffect, useRef } from "react";

export const useClickOutside = (handler) => {
    const ref = useRef();
    const labelRef = useRef();
  
    const handleClickOutside = (event) => {
      if (event.target === labelRef.current) return;

      if (ref.current && !ref.current.contains(event.target)) handler();
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handler]);
  
    return {
      ref,
      labelRef,
    };
  };