import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        } else {
          ref.current.classList.remove("visible"); // Ensures smooth exit
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal opacity-0 transform scale-95 transition-all duration-[1200ms] ease-in-out"
    >
      {children}
    </div>
  );
};
