/**
 * Everything the site says, in one place.
 *
 * Every component reads from here and holds no copy of its own, so updating
 * the portfolio means editing this file and nothing else.
 */

export const profile = {
  name: 'Yash Agrawal',
  role: 'Software Engineer II',
  tagline:
    'I build search and data-intensive systems that stay fast at 300M+ records.',
  location: 'Pune, India',
  email: 'yashagrawal070@gmail.com',
  phone: '+91 9822945017',
  github: 'https://github.com/YashAgrawal1',
  linkedin: 'https://linkedin.com/in/agrawal-yash1',
  /** Lives in `public/`, so it is served from the site root. */
  resume: '/Yash_Agrawal_Resume.pdf',
};

/** Left-hand nav. Each id must match a <section id="..."> in the main column. */
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

/**
 * About copy. A `highlights` entry is rendered in the brighter heading colour;
 * plain strings are rendered as-is.
 */
export const about = [
  "I'm a backend engineer drawn to the unglamorous half of search — the mappings, the analyzer chains, the reindex that has to run while people are still querying. Most of my work lives at the point where a dataset gets big enough that the obvious approach quietly stops working.",
  "Right now I'm a Software Engineer II at {American Technology Consulting}, where I own end-to-end technical direction for two production platforms: a government hiring system whose Elasticsearch candidate-search layer I designed over {10M+ applicant records}, and the internal LLM engineering framework I built on the Anthropic API and MCP.",
  'Before that I spent nearly three years at Data Axle Solutions owning the ingestion and indexing pipeline behind {300M+ B2B records} — which is where I learned most of what I know about relevance tuning, zero-downtime alias swaps, and query plans that look fine until they don’t.',
  "I'm based in Pune, India, and currently open to backend and search-infrastructure roles.",
];

export const experience = [
  {
    from: 'Feb 2026',
    to: 'Present',
    role: 'Software Engineer II',
    company: 'American Technology Consulting',
    url: '',
    body: [
      'Own end-to-end technical direction for two production platforms. Built an internal {AI engineering assistant framework} on the Anthropic API and MCP, wiring in Jira and Figma to auto-generate design/AC gap analysis, edge cases, design drafts and test cases from a single epic ID.',
      'Designed the Elasticsearch candidate-search layer for a government ATS over {10M+ applicant records} — custom analyzer chain and field-level boosting holding {70ms p95}. Cut dashboard p95 from {2s to 400ms} by taking 70 queries per request down to 8. Hardened Sidekiq pipelines across {100K+ operations} with idempotency, retry-with-backoff and dead-letter handling.',
      'Set backend design standards across both products and brought {3 engineers} to independent feature ownership on complex Rails and Elasticsearch work.',
    ],
    tags: [
      'Ruby on Rails',
      'Elasticsearch',
      'PostgreSQL',
      'Sidekiq',
      'Anthropic API',
      'MCP',
      'AWS',
    ],
  },
  {
    from: 'Jul 2023',
    to: 'Feb 2026',
    role: 'Software Engineer',
    company: 'Data Axle Solutions',
    url: '',
    body: [
      'Owned the ingestion and indexing pipeline feeding {300M+ B2B records} into Elasticsearch — incremental updates and full reindexes behind zero-downtime alias swaps, taking a full reindex from a maintenance-window operation to a live 11-hour one.',
      'Redesigned index structure, analyzers and relevance scoring, cutting multi-field query p95 from {1.5s to 200ms} on high-cardinality fields. Profiled ActiveRecord query plans across data-heavy workflows for a further {35%} off critical-path p95, and shipped {20+ end-to-end features} while guiding two junior developers as senior IC.',
    ],
    tags: [
      'Elasticsearch',
      'Ruby on Rails',
      'PostgreSQL',
      'ActiveRecord',
      'Kafka',
      'React',
      'AWS',
    ],
  },
  {
    from: 'Feb 2023',
    to: 'Jun 2023',
    role: 'Frontend Developer Intern',
    company: 'Data Axle Solutions',
    url: '',
    body: [
      'Built Rails API endpoints, ActiveRecord models and backend logic alongside React work — and converted to full-time backend engineering on the strength of it. Developed responsive React interfaces against REST APIs, with lazy loading and component-level optimisation.',
    ],
    tags: ['React.js', 'Ruby on Rails', 'REST APIs', 'PostgreSQL'],
  },
];

export const skills = [
  {
    group: 'Backend',
    items: [
      'Ruby on Rails',
      'ActiveRecord',
      'Sidekiq',
      'Kafka',
      'REST APIs',
      'GraphQL',
      'Service Objects',
    ],
  },
  {
    group: 'Search & Data',
    items: ['Elasticsearch', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    group: 'AI Engineering',
    items: ['Anthropic API', 'Model Context Protocol', 'LLM tool integration'],
  },
  {
    group: 'Languages',
    items: ['Ruby', 'SQL', 'JavaScript', 'TypeScript', 'Java'],
  },
  { group: 'Cloud & Infra', items: ['AWS EC2', 'S3', 'RDS', 'SQS', 'Docker'] },
  {
    group: 'Tooling',
    items: ['Git', 'GitHub Actions', 'RSpec', 'Postman', 'Sentry', 'CloudWatch'],
  },
];

export const education = {
  from: '2019',
  to: '2023',
  degree: 'B.Tech, Computer Science',
  school: 'MIT Academy of Engineering, Alandi, Pune',
  detail: 'CGPA 8.76 / 10',
};
