import { useEffect, useRef } from "react";

/**
 * LightBeam Component
 * 
 * Creates an animated light beam effect that follows the mouse cursor.
 * Supports both light and dark themes with appropriate color adjustments.
 * 
 * Design: Architectural Minimalist
 * - Subtle, non-intrusive light effect
 * - Responsive to user interaction
 * - Theme-aware coloring
 */

interface LightBeamProps {
  intensity?: number; // 0-1, controls opacity
  size?: number; // Size of the light beam in pixels
  followMouse?: boolean; // Enable mouse tracking
}

export default function LightBeam({ 
  intensity = 0.15, 
  size = 400,
  followMouse = true 
}: LightBeamProps) {
  const beamRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!followMouse || !beamRef.current) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (beamRef.current) {
        const x = mousePos.current.x;
        const y = mousePos.current.y;
        
        // Smooth easing for the light beam position
        beamRef.current.style.left = `${x}px`;
        beamRef.current.style.top = `${y}px`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [followMouse]);

  return (
    <div
      ref={beamRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(circle at center, rgba(0, 85, 255, ${intensity * 0.3}) 0%, rgba(0, 85, 255, ${intensity * 0.1}) 30%, transparent 70%)`,
        width: `${size}px`,
        height: `${size}px`,
        marginLeft: `-${size / 2}px`,
        marginTop: `-${size / 2}px`,
        filter: "blur(40px)",
        transition: "opacity 0.3s ease-out",
      }}
      aria-hidden="true"
    />
  );
}
