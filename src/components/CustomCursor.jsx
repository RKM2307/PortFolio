import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [primaryPosition, setPrimaryPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [isIdle, setIsIdle] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let idleTimeout;

    const moveCursor = (e) => {
      setPrimaryPosition({ x: e.clientX, y: e.clientY });

      // Smooth trailing effect with delay
      setTimeout(() => {
        setTrailingPosition({ x: e.clientX, y: e.clientY });
      }, 100);

      setIsIdle(false);
      clearTimeout(idleTimeout);

      // Set idle state after 1.5s
      idleTimeout = setTimeout(() => {
        setIsIdle(true);
      }, 10);
    };

    // Hide default cursor and detect hover
    document.body.style.cursor = "none";
    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll("a, button, nav");
    interactiveElements.forEach((el) => {
      el.style.cursor = "none"; // Removes default hand cursor
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    return () => {
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.style.cursor = "pointer";
        el.removeEventListener("mouseenter", () => setHovering(true));
        el.removeEventListener("mouseleave", () => setHovering(false));
      });
      clearTimeout(idleTimeout);
    };
  }, []);

  return (
    <>
      {/* Primary Cursor - White */}
      <div
        className="cursor primary"
        style={{
          left: `${primaryPosition.x}px`,
          top: `${primaryPosition.y}px`,
          transform: hovering ? "scale(1.3)" : "scale(1)", // Slightly enlarges on hover
        }}
      />

      {/* Trailing Cursor - Blue, disappears when idle */}
      <div
        className="cursor trailing"
        style={{
          left: `${trailingPosition.x}px`,
          top: `${trailingPosition.y}px`,
          opacity: isIdle ? 0 : 1, // Hides blue cursor when idle
        }}
      />
    </>
  );
};

export default CustomCursor;
