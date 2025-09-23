import { useRef } from "react";
import useScrollbar from "./script/scrollbar";

export default function ScrollableSection({ children }) {
  const ref = useRef(null);
  const showScrollbar = useScrollbar(ref);

  return (
    <section
      ref={ref}
      className={`h-96 overflow-y-scroll transition-all duration-500 ${
        showScrollbar
          ? "scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-gray-200"
          : "scrollbar-none"
      }`}
    >
      {children}
    </section>
  );
}
