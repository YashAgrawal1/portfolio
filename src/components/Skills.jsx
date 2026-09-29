import { skills } from '../data';
import Section from './Section';
import Tags from './Tags';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skill-rows">
        {skills.map(group => (
          <div key={group.group} className="skill-row">
            <h3 className="card-when">{group.group}</h3>
            <Tags items={group.items} label={group.group} />
          </div>
        ))}
      </div>
    </Section>
  );
}
