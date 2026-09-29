/** A row of technology pills. */
export default function Tags({ items, label }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map(item => (
        <li key={item}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
