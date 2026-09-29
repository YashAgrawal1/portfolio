import { profile, sections } from '../data';
import { useActiveSection } from '../hooks/useActiveSection';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

const SECTION_IDS = sections.map(section => section.id);

/**
 * The fixed left-hand column: who this is, and where to go.
 *
 * It stops being sticky below the large breakpoint and simply stacks above the
 * content, which is why the nav itself is hidden there — the sections follow
 * immediately, so there is nothing to navigate to.
 */
export default function Sidebar() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className="sidebar">
      <div>
        <h1 className="name">
          <a href="/">{profile.name}</a>
        </h1>
        <p className="role">{profile.role}</p>
        <p className="tagline">{profile.tagline}</p>

        <nav className="nav" aria-label="In-page jump links">
          <ul>
            {sections.map(section => (
              <li key={section.id}>
                <a
                  className={`nav-link${active === section.id ? ' is-active' : ''}`}
                  href={`#${section.id}`}
                >
                  <span className="nav-indicator" />
                  <span className="nav-label">{section.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="socials" aria-label="Social links">
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`}>
            <MailIcon />
          </a>
        </li>
      </ul>
    </header>
  );
}
