import { education } from '../data';
import Section from './Section';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="skill-row">
        <p className="card-when">
          {education.from}
          <span aria-hidden="true"> — </span>
          {education.to}
        </p>
        <div>
          <h3 className="card-title">
            <span className="card-company">{education.degree}</span>
          </h3>
          <p className="edu-school">
            {education.school} · {education.detail}
          </p>
        </div>
      </div>
    </Section>
  );
}
