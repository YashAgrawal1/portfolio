import { about, profile } from '../data';
import { withHighlights } from '../highlight';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="prose">
        {about.map(paragraph => (
          <p key={paragraph.slice(0, 40)}>{withHighlights(paragraph)}</p>
        ))}
        <p>
          The quickest way to reach me is{' '}
          <a className="inline-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
