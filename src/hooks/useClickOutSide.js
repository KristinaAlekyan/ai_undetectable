import { useEffect,useRef } from "react";

export const useClickOutside = (handler) => {
    const ref = useRef();
  
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [handler]);
  
    return ref;
  };
  
  