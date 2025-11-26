"use client";

import React, { useState, useEffect } from "react";

export const MouseLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15), transparent 30%)`, 
      }}
    />
  );
};