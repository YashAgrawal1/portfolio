import { experience, profile } from '../data';
import { withHighlights } from '../highlight';
import { ArrowIcon } from './Icons';
import Section from './Section';
import Tags from './Tags';

/**
 * The roles, newest first.
 *
 * Hovering one entry dims the others: the list carries the dimming rule and
 * each card cancels it for itself, so the effect needs no JavaScript and no
 * per-card state.
 */
export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="cards">
        {experience.map(job => (
          <li key={`${job.company}-${job.from}`} className="card">
            <p className="card-when">
              <span className="sr-only">From </span>
              {job.from}
              <span aria-hidden="true"> — </span>
              <span className="sr-only">to </span>
              {job.to}
            </p>

            <div className="card-body">
              <h3 className="card-title">
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noreferrer">
                    <span className="card-role">{job.role}</span>
                    <span aria-hidden="true"> · </span>
                    <span className="card-company">{job.company}</span>
                    <ArrowIcon />
                  </a>
                ) : (
                  <>
                    <span className="card-role">{job.role}</span>
                    <span aria-hidden="true"> · </span>
                    <span className="card-company">{job.company}</span>
                  </>
                )}
              </h3>

              {job.body.map(paragraph => (
                <p key={paragraph.slice(0, 40)}>{withHighlights(paragraph)}</p>
              ))}

              {job.tags.length > 0 && (
                <Tags items={job.tags} label={`Technologies used at ${job.company}`} />
              )}
            </div>
          </li>
        ))}
      </ol>

      <a className="resume-link" href={profile.resume} target="_blank" rel="noreferrer">
        View full résumé
        <ArrowIcon />
      </a>
    </Section>
  );
}
