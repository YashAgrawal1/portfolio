import { useSpotlight } from '../hooks/useSpotlight';

/**
 * The glow that follows the cursor. Renders nothing at all where the hook
 * declines to track a pointer, so touch devices pay no cost for it.
 */
export default function Spotlight() {
  const position = useSpotlight();
  if (!position) return null;

  return (
    <div
      className="spotlight"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.14), transparent 80%)`,
      }}
    />
  );
}
