import { useEffect } from "react";
import { useState } from "react";

export default function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
