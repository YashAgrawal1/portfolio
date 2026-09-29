import { useEffect, useState } from 'react';

/**
 * Cursor position for the background glow, in viewport pixels.
 *
 * Returns null — and never attaches a listener — where the effect would be
 * wrong or wasted: a pointer that cannot hover (touch), or a reader who has
 * asked for reduced motion.
 */
export function useSpotlight() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const wanted =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!wanted) return undefined;

    let frame = 0;
    const onMove = event => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setPosition({ x: event.clientX, y: event.clientY }),
      );
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return position;
}
