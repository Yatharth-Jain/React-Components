"use client";
import React, { useEffect } from "react";

export default function Page() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const canvasWidth = document.body.clientWidth,
      canvasHeight = document.body.clientHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // To Get Mouse Location
    let mousePosition = { x: -1000, y: -1000 };
    const onMouseMove = (e: MouseEvent) => {
      mousePosition = { x: e.clientX, y: e.clientY };
    };

    canvas.addEventListener("mousemove", onMouseMove);

    const Animation = () => {
      requestAnimationFrame(Animation);
      context.clearRect(0, 0, canvasWidth, canvasHeight);
    	// Add Animation Accordingly
			
    };
    Animation();

    return () => {
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas className="h-screen w-screen bg-[#E6E9EB]" ref={canvasRef} />;
}
