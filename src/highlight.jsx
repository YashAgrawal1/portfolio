import { Fragment } from 'react';

/**
 * Renders copy written with {braced} spans as emphasised text.
 *
 * The content in `data.js` marks its own emphasis so that the copy and the
 * markup presenting it stay in one place: `'held {70ms p95} at peak'`. Odd
 * indices of the split are the braced parts, even ones the plain text between.
 */
export function withHighlights(text) {
  return text.split(/\{([^}]+)\}/g).map((chunk, i) =>
    i % 2 === 1 ? (
      <strong key={`${i}-${chunk}`} className="hl">
        {chunk}
      </strong>
    ) : (
      <Fragment key={`${i}-${chunk}`}>{chunk}</Fragment>
    ),
  );
}
