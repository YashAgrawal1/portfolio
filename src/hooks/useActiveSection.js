import { useEffect, useState } from 'react';

/**
 * The id of the section the reader is currently looking at, for the nav's
 * active marker.
 *
 * A plain IntersectionObserver would flip to the *next* section the moment its
 * first pixel appears, so the root margin narrows the viewport to a band across
 * the upper-middle of the screen and the topmost section intersecting that band
 * wins. Falls back to the first section before any scrolling has happened.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    );

    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
