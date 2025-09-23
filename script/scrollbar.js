// src/hooks/useScrollbar.js
import { useEffect, useState } from "react";

export default function useScrollbar(ref) {
  const [showScrollbar, setShowScrollbar] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    let timeout;

    const handleScroll = () => {
      setShowScrollbar(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowScrollbar(false), 1000);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return showScrollbar;
}
