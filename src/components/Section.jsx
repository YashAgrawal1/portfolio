/**
 * A titled block of the main column.
 *
 * The heading is visible only on narrow screens, where it sticks to the top as
 * a blurred bar — on wide screens the left-hand nav already says which section
 * the reader is in, so repeating it would be noise. It stays in the markup
 * either way, because a screen reader has no nav indicator to read.
 */
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-heading`}>
      <div className="section-head">
        <h2 id={`${id}-heading`}>{title}</h2>
      </div>
      {children}
    </section>
  );
}
