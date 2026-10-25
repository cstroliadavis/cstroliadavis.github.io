/**
 * Structured portfolio, project, article, and skill-tagged experience dataset.
 * Every technology listed under a role appears as an individual competency box
 * in the categorized skills menu and filters down to matching achievements.
 *
 * @type {object}
 * @property {object[]} articles - Published engineering articles on Medium.
 * @property {object[]} experience - Career roles with skill-tagged achievement bullets.
 * @property {object[]} projects - Open-source repositories and reference applications.
 * @property {string[]} skillCategories - Ordered skill competency category headings.
 * @property {object[]} skillCompetencies - Categorized skills with proficiency scores (0-100).
 * @property {string[]} summaryParagraphs - Executive overview paragraphs rendered in the hero.
 *
 * @example
 * ```js
 * PORTFOLIO_DATA.skillCategories.length; // => 5
 * PORTFOLIO_DATA.experience.length > 0; // => true
 * ```
 */
export const PORTFOLIO_DATA = {
  articles: [
    {
      id: 'mcp-part-1',
      title: 'Building MCP Servers: Part 1 — Getting Started with Resources',

      badge: 'MCP Series · Part 1',
      date: 'Dec 2024',
      summary:
        'Hands-on architectural guide to designing Model Context Protocol (MCP) ' +
        'servers in TypeScript, starting with exposing structured resources to AI agents.',
      url: 'https://medium.com/@cstroliadavis/building-mcp-servers-536969d27809',
    },
    {
      id: 'mcp-part-2',
      title:
        'Building MCP Servers: Part 2 — Extending Resources with Resource Templates',

      badge: 'MCP Series · Part 2',
      date: 'Jan 2025',
      summary:
        'Expanding MCP servers with dynamic URI templates so AI models can query ' +
        'parameterized application state and domain slices on demand.',
      url: 'https://medium.com/@cstroliadavis/building-mcp-servers-315917582ad1',
    },
    {
      id: 'mcp-part-3',
      title: 'Building MCP Servers: Part 3 — Adding Prompts',

      badge: 'MCP Series · Part 3',
      date: 'Jan 2025',
      summary:
        'Standardizing reusable, context-aware prompt workflows inside MCP servers ' +
        'to guide deterministic agent behavior across complex engineering tasks.',
      url: 'https://medium.com/@cstroliadavis/building-mcp-servers-13570f347c74',
    },
    {
      id: 'mcp-part-4',
      title: 'Building MCP Servers: Part 4 — Creating Tools',

      badge: 'MCP Series · Part 4',
      date: 'Feb 2025',
      summary:
        'Implementing executable MCP tools with strict schema validation and safe ' +
        'side-effect boundaries for autonomous agentic workflows.',
      url: 'https://medium.com/@cstroliadavis/building-mcp-servers-f9ce29814f1f',
    },
    {
      id: 'ditch-the-bloat',
      title:
        'Can We Ditch the Bloat Already?: A Practical Plan for Owning Our Code Again',

      badge: 'Architecture & Craftsmanship',
      date: 'Jun 2026',
      summary:
        'A pragmatic architectural blueprint for eliminating transitive npm bloat, ' +
        'reclaiming codebase ownership, and pairing lean patterns with AI-assisted tooling.',
      url:
        'https://medium.com/@cstroliadavis/' +
        'can-we-ditch-the-bloat-already-a-practical-plan-for-owning-our-code-again-006dfd2858f9',
    },
    {
      id: 'ransomware-of-convenience',
      title:
        'The Ransomware of Convenience: Why Your Codebase Isn’t Really Yours',

      badge: 'Dependency Hygiene',
      date: 'Jun 2026',
      summary:
        'Examining the hidden maintenance, security, and cognitive costs of ' +
        'over-engineered dependency trees in modern enterprise web applications.',
      url:
        'https://medium.com/@cstroliadavis/' +
        'the-ransomware-of-convenience-why-your-codebase-isnt-really-yours-98d505aa5e68',
    },
    {
      id: 'semi-truck-sedan-frame',
      title:
        'A Semi-Truck on a Sedan Frame: Why Treating JavaScript Like Java Complicated the Web',

      badge: 'Language Design',
      date: 'Jun 2026',
      summary:
        'Why forcing heavy classical OOP hierarchies onto JavaScript fights the ' +
        'runtime—and how closure-based factories and functional composition keep code fast.',
      url:
        'https://medium.com/@cstroliadavis/' +
        'a-semi-truck-on-a-sedan-frame-why-treating-javascript-like-java-' +
        'complicated-the-web-13728a5fbdda',
    },
    {
      id: 'wild-west-dom',
      title:
        'The Wild West of the DOM: When Front-End Development Wasn’t “Real” Engineering',

      badge: 'Engineering History',
      date: 'Jun 2026',
      summary:
        'Lessons from 25+ years of building browser applications—from early DOM ' +
        'standardization wars to modern reactive architectures.',
      url:
        'https://medium.com/@cstroliadavis/' +
        'the-wild-west-of-the-dom-when-front-end-development-wasnt-real-engineering-b3a7649ebe48',
    },
  ],

  experience: [
    {
      id: 'self-employed',
      title: 'Software Engineer / Consultant',

      company: 'Self-Employed',
      dateRange: 'Nov 2023 – Present',
      highlights: [
        {
          skills: [
            'React',
            'TypeScript',
            'JavaScript',
            'AngularJS',
            'Vite',
            'Storybook',
          ],
          text:
            'Recruited for an initial 6-month engagement specifically to bridge ' +
            'deep legacy AngularJS expertise with modern React and TypeScript, ' +
            'porting core enterprise workflows from AngularJS to React.',
        },
        {
          skills: ['TypeScript', 'JavaScript', 'Web Workers'],
          text:
            'Architected a reusable Web Worker Higher-Order Function (HOF) wrapper ' +
            'that converted synchronous functions into asynchronous worker-thread ' +
            'operations, eliminating 20+ second main-thread freezes and browser crash ' +
            'prompts for enterprise clients filtering large datasets while avoiding ' +
            'costly backend cloud compute calls.',
        },
        {
          skills: ['SQL Server', 'SQL', 'C#', '.NET'],
          text:
            'Diagnosed and resolved a severe database performance bottleneck in a ' +
            'multi-tenant publishing pipeline; re-architected legacy SQL Server query ' +
            'patterns using Common Table Expressions (CTEs) and indexed in-memory ' +
            'table variables to prune non-indexable JSON payloads, reducing execution ' +
            'time from hours to under 2 minutes and eliminating daily timeout crashes.',
        },
        {
          skills: [
            'C#',
            '.NET',
            'REST APIs',
            'OpenAPI',
            'Technical Leadership',
          ],
          text:
            'Retained for a dedicated 3-month contract extension as technical lead to ' +
            'research, design, and deliver a high-security, two-way C# / .NET REST ' +
            'Web API Proof of Concept (POC) with OpenAPI contracts and custom security ' +
            'hooks for sensitive enterprise client data exchange.',
        },
        {
          skills: [
            'TypeScript',
            'JavaScript',
            'AngularJS',
            'C#',
            '.NET',
            'Technical Leadership',
          ],
          text:
            'Engineered a low-profile search component with multi-page highlighting ' +
            'and systematically modernized a 10+ year-old AngularJS and C#/.NET ' +
            'codebase across multiple subsequent contract renewals—replacing ' +
            'anti-patterns and mentoring engineers on maintainable coding standards.',
        },
        {
          skills: ['MCP / Agentic AI', 'TypeScript', 'JavaScript', 'Bun'],
          text:
            'Designed and published zero-dependency TypeScript/Bun developer tooling ' +
            '(vscode-tailor, logging, csv-lib, coliner, s20) and Model Context ' +
            'Protocol (MCP) server architectures for hierarchical AI agent memory.',
        },
      ],
      location: 'Remote',
    },
    {
      id: 'alined',
      title: 'Sr. React Developer',

      company: 'ALINED Consulting Group, LLC (Client: JPMorgan Chase)',
      dateRange: 'Aug 2023 – Nov 2023',
      highlights: [
        {
          skills: ['React', 'TypeScript', 'Vite', 'Vitest'],
          text:
            'Developed and enhanced user-facing features for an enterprise financial ' +
            'application using React, TypeScript, Vite, and Vitest.',
        },
        {
          skills: ['React', 'TypeScript'],
          text:
            'Integrated a proprietary in-house component library and design system, ' +
            'collaborating closely with product stakeholders to maintain a seamless, ' +
            'accessible user experience.',
        },
        {
          skills: ['Node.js', 'Java', 'TypeScript', 'REST APIs', 'OpenAPI'],
          text:
            'Collaborated with backend engineers to design and integrate RESTful API ' +
            'service endpoints and OpenAPI schemas across Node.js and Java services.',
        },
      ],
      location: 'Columbus, OH (Hybrid)',
    },
    {
      id: 'swarm-solutions',
      title: 'Sr. JavaScript Developer',

      company: 'Swarm Solutions (Client: Radio.com / Audacy.com)',
      dateRange: 'Mar 2019 – Jun 2023',
      highlights: [
        {
          skills: [
            'Node.js',
            'Express',
            'Vue.js',
            'JavaScript',
            'Handlebars.js',
          ],
          text:
            'Co-developed Project Unity (Clay CMS) on Node.js, Express, Vue.js, and ' +
            'Handlebars backed by Fastly CDN—consolidating ~400 independent station ' +
            'Drupal websites into a single multi-tenant platform where shared ' +
            'national articles dynamically rendered inside each station’s custom ' +
            'theme. Engineered a hybrid SSR + SPA architecture using Handlebars for ' +
            'SEO-critical server rendering wrapped by Vue.js client interactivity.',
        },
        {
          skills: ['Redis', 'Node.js', 'JavaScript'],
          text:
            'Engineered a Redis-backed semaphore queue manager to eliminate ' +
            'thundering-herd database deadlocks and connection pool exhaustion when ' +
            'spinning up 40+ load-balanced application instances simultaneously, ' +
            'securing zero-downtime automated deployments across 400+ radio stations.',
        },
        {
          skills: ['PostgreSQL', 'SQL', 'Elasticsearch', 'Node.js', 'JavaScript'],
          text:
            'Engineered and executed a multi-month data migration for Audacy.com, ' +
            'rewriting 100,000+ records across PostgreSQL and Elasticsearch to ' +
            'decouple site-origin identifiers from database keys, eliminating a ' +
            'critical CMS architectural constraint with zero downtime.',
        },
        {
          skills: [
            'React',
            'TypeScript',
            'JavaScript',
            'Node.js',
            'REST APIs',
            'OpenAPI',
            'Kafka',
            'OAuth',
            'Datadog',
            'AWS',
            'Kubernetes',
            'Docker',
          ],
          text:
            'Built the React and TypeScript frontend for a centralized internal SSO, ' +
            'role, and privilege-registration platform integrated with Node.js REST ' +
            'microservices, OpenAPI specifications, Apache Kafka event streams, ' +
            'custom Google OAuth / Passport.js callbacks, and Datadog distributed ' +
            'telemetry across AWS (EC2, S3, OpenSearch, ElastiCache, Kubernetes) and ' +
            'local Docker stacks.',
        },
        {
          skills: [
            'Technical Leadership',
            'Python',
            'TypeScript',
            'JavaScript',
            'Node.js',
          ],
          text:
            'Served as a go-to Subject Matter Expert (SME), technical mentor, and ' +
            'regular pull-request reviewer for Python deployment and automation ' +
            'scripts; partnered with founders before the pandemic shift to establish ' +
            'high-trust remote engineering practices—initiating bi-weekly paid team ' +
            'game days and virtual coffee chats that strengthened cross-team cohesion ' +
            'and velocity.',
        },
      ],
      location: 'Remote',
    },
    {
      id: 'edx',
      title: 'Full Stack JavaScript Instructor (Part-Time)',

      company: 'edX (2U)',
      dateRange: 'Oct 2022 – Apr 2023',
      highlights: [
        {
          skills: [
            'Technical Leadership',
            'JavaScript',
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'GraphQL',
          ],
          text:
            'Taught an intensive 6-month full-stack software development bootcamp ' +
            '(MongoDB, Express, React, Node.js, GraphQL) to a cohort of 25+ ' +
            'aspiring developers.',
        },
        {
          skills: [
            'Technical Leadership',
            'React',
            'Node.js',
            'SQL',
            'MongoDB',
            'OAuth',
            'GraphQL',
            'Stripe',
            'JavaScript',
          ],
          text:
            'Provided live architectural instruction, code reviews, debugging ' +
            'mentorship, and reference implementations covering SQL/NoSQL data ' +
            'modeling, JWT/OAuth security, Apollo GraphQL, and Stripe payment ' +
            'processing.',
        },
      ],
      location: 'Remote',
    },
    {
      id: 'ingage-claritas',
      title: 'Sr. Consultant & De Facto Technical Lead',

      company: 'Ingage Partners / Claritas',
      dateRange: 'Apr 2018 – Feb 2019',
      highlights: [
        {
          skills: [
            'PostgreSQL',
            'SQL',
            'Oracle PL/SQL',
            'Technical Leadership',
          ],
          text:
            'Mastered advanced PostgreSQL (PL/pgSQL, JSONB, PostGIS, GIN/expression ' +
            'indexes, CTEs) within 2 weeks to rescue a stalled Oracle-to-EDB ' +
            'Postgres migration—porting legacy Oracle PL/SQL stored procedures into ' +
            'clean, maintainable pgSQL and coaching the in-house DBA on JSONB ' +
            'indexing and query optimization.',
        },
        {
          skills: [
            'JavaScript',
            'Dojo Toolkit',
            'Java',
            'Technical Leadership',
          ],
          text:
            'Pivoted from an initial Java backend assignment to untangle a complex ' +
            'legacy Dojo Toolkit front-end that had stalled the team; reverse-engineered ' +
            'undocumented Dojo widget lifecycles, unblocked fellow developers, and ' +
            'advised leadership on a strategic roadmap to retire Dojo.',
        },
        {
          skills: [
            'Technical Leadership',
            'Mob Programming',
            'PostgreSQL',
            'JavaScript',
          ],
          text:
            'Stepped up as de facto technical team lead across 6–8 contractors from ' +
            'multiple staffing agencies, introducing weekly mob programming sessions ' +
            'that unified frontend, backend, and database workflows—and was the sole ' +
            'contractor retained for an extension to complete final delivery, ' +
            'post-launch support, and full knowledge transfer (KT).',
        },
      ],
      location: 'Montgomery, OH',
    },
    {
      id: 'eliassen-kroger',
      title: 'Sr. Software Developer',

      company: 'Eliassen Group / Kroger Digital',
      dateRange: 'Dec 2017 – Feb 2018',
      highlights: [
        {
          skills: ['Java', 'Spring Boot', 'REST APIs', 'DB2 SQL', 'Kafka'],
          text:
            'Engineered backend REST microservices in Java, Spring Boot, DB2, and ' +
            'Apache Kafka for Kroger’s enterprise product taxonomy platform, managing ' +
            'regional product categorization and pricing rules.',
        },
        {
          skills: [
            'React',
            'Redux',
            'Rollup',
            'JavaScript',
            'Kibana',
            'Mob Programming',
          ],
          text:
            'Built the internal React, Redux, and Rollup front-end portal enabling ' +
            'merchandising personnel to update taxonomy hierarchies in real time, ' +
            'practicing ping-pong pair programming and mob programming while ' +
            'operating real-time Kibana error-tracking dashboards across blue/green ' +
            'and canary deployments.',
        },
      ],
      location: 'Blue Ash, OH',
    },
    {
      id: 'gaig-2015',
      title: 'App Analysis & Development Specialist',

      company: 'Great American Insurance Group (Consultant-to-Perm)',
      dateRange: 'Oct 2015 – Dec 2017',
      highlights: [
        {
          skills: ['JavaScript', 'Web Workers'],
          text:
            'Re-architected a data-intensive PDF generation pipeline using Web ' +
            'Workers to offload heavy JSON payload parsing and HTML DOM composition ' +
            'off the main thread, dropping processing time for large datasets from ' +
            '5+ minute timeouts to a few seconds.',
        },
        {
          skills: ['JavaScript', 'AngularJS'],
          text:
            'Authored a custom JavaScript profiler to dynamically instrument function ' +
            'calls and isolate memory leaks caused by pseudo-Java OOP anti-patterns ' +
            'in AngularJS single-page applications, eliminating browser crashes ' +
            'during large dataset processing.',
        },
        {
          skills: [
            'Vue.js',
            'React',
            'JavaScript',
            'Technical Leadership',
          ],
          text:
            'Spearheaded an enterprise front-end framework evaluation comparing ' +
            'Vue.js, React, and Aurelia—assessing developer ergonomics against ' +
            'enterprise governance risk (identifying Vue’s superior DX alongside its ' +
            'single-maintainer bus-factor risk at the time) to guide the ' +
            'organization’s adoption of React.',
        },
        {
          skills: [
            'Groovy',
            'Java',
            'Spring Boot',
            'Selenium',
            'Docker',
          ],
          text:
            'Navigated a complex backend ecosystem (Groovy, Java, Spring Boot, ' +
            'Apache, Selenium, Docker) backed by Oracle DB and a multi-dimensional ' +
            'business-rules graph database (n-cube), reverse-engineering undocumented ' +
            'data relationships and documenting architectural anti-patterns.',
        },
      ],
      location: 'Cincinnati, OH',
    },
    {
      id: 'ingage-2015',
      title: 'Senior Consultant',

      company: 'Ingage Partners, LLC',
      dateRange: 'Jan 2015 – Dec 2015',
      highlights: [
        {
          skills: ['SQL Server', 'SQL', 'Technical Leadership'],
          text:
            'Executed high-impact consulting engagements, including optimizing a ' +
            'SQL Server database for the Cincinnati Reds while mentoring their ' +
            'in-house developer on query tuning and indexing strategies.',
        },
        {
          skills: ['Technical Leadership', 'JavaScript'],
          text:
            'Partnered in pre-sales technical discovery—delivering effort estimations ' +
            'and cost-benefit analyses—vetted engineering candidates through ' +
            'technical interviews, and delivered rapid polyglot consulting ' +
            'engagements.',
        },
      ],
      location: 'Cincinnati, OH',
    },
    {
      id: 'cincinnati-insurance',
      title: 'Senior Consultant',

      company: 'Cincinnati Insurance Group (via Ingage Partners)',
      dateRange: 'Jan 2014 – Dec 2014',
      highlights: [
        {
          skills: ['C#', '.NET', 'REST APIs', 'SOAP', 'Technical Leadership'],
          text:
            'Proposed and championed the Adapter Pattern as the organization-wide ' +
            'go-forward C# architecture for decoupling third-party API integrations.',
        },
        {
          skills: ['C#', '.NET', 'WPF', 'WinForms', 'Technical Leadership'],
          text:
            'Mentored fellow developers on asynchronous C# / .NET programming ' +
            'patterns across WinForms and WPF desktop applications to eliminate UI ' +
            'thread blocking and improve responsiveness.',
        },
        {
          skills: ['C#', '.NET', 'REST APIs', 'SOAP'],
          text:
            'Reverse-engineered and documented an external partner web service whose ' +
            'production payloads contradicted its official specification, preventing ' +
            'downstream integration defects.',
        },
      ],
      location: 'Fairfield, OH',
    },
    {
      id: 'gaig-2013',
      title: 'Senior Consultant',

      company: 'Great American Insurance Group (via Ingage Partners)',
      dateRange: 'Jun 2013 – Dec 2013',
      highlights: [
        {
          skills: ['Technical Leadership', 'JavaScript', 'TDD', 'Git'],
          text:
            'Drove the adoption of modern JavaScript engineering practices by ' +
            'establishing Test-Driven Development (TDD) as a team standard and ' +
            'leading the migration from CVS to Git.',
        },
        {
          skills: [
            'JavaScript',
            'AngularJS',
            'HTML5 / CSS / LESS / SCSS / PostCSS',
            'Technical Leadership',
          ],
          text:
            'Architected core components for an internal AngularJS UI library ' +
            '(UI Bootstrap) used across the enterprise, applying design patterns for ' +
            'loose coupling and training developers across multiple product teams.',
        },
      ],
      location: 'Cincinnati, OH',
    },
    {
      id: 'cchmc-2012',
      title: 'Senior Consultant',

      company: "Cincinnati Children's Medical Center (via Ingage Partners)",
      dateRange: 'Jul 2012 – Jun 2013',
      highlights: [
        {
          skills: ['C#', 'VB.NET', 'ASP.NET', 'SQL Server', 'SQL'],
          text:
            'Dramatically improved clinical metrics reporting (PMRS) performance ' +
            'across C#, VB.NET, and SQL Server code paths, reducing processing times ' +
            'on key operations from over 5 minutes to under 10 seconds.',
        },
        {
          skills: [
            'JavaScript',
            'HTML5 / CSS / LESS / SCSS / PostCSS',
            'ASP.NET',
          ],
          text:
            'Introduced modern frontend architecture patterns and LESS for modular ' +
            'stylesheets, delivering critical Fetal Care application enhancements ' +
            'ahead of schedule.',
        },
      ],
      location: 'Cincinnati, OH',
    },
    {
      id: 'pg-2012',
      title: 'Senior Consultant',

      company: 'Procter & Gamble (via Ingage Partners)',
      dateRange: 'Mar 2012 – Jul 2012',
      highlights: [
        {
          skills: ['XSLT 1.0', 'SharePoint', 'JavaScript'],
          text:
            'Re-architected a failing SharePoint and XML/XSLT 1.0 enterprise ' +
            'reporting system as the sole developer, refactoring unmaintainable ' +
            'stylesheets into modular functional templates while substantially ' +
            'reducing memory consumption and render latency.',
        },
        {
          skills: ['SharePoint', 'XSLT 1.0'],
          text:
            'Diagnosed and engineered a workaround for an undocumented platform ' +
            'defect where staging changes were propagating into production.',
        },
      ],
      location: 'Cincinnati, OH',
    },
    {
      id: 'cchmc-2011',
      title: 'Senior Consultant',

      company: "Cincinnati Children's Medical Center (via Ingage Partners)",
      dateRange: 'Jun 2011 – Feb 2012',
      highlights: [
        {
          skills: [
            'VB.NET',
            'ASP.NET',
            'LINQ',
            'JavaScript',
            'jQuery',
            'SQL Server',
            'SQL',
            'Technical Leadership',
          ],
          text:
            'Mentored the full-time engineering team in modern JavaScript, jQuery, ' +
            'and .NET LINQ patterns while maintaining mission-critical VB.NET / ' +
            'ASP.NET external integration portals and internal system health monitors.',
        },
      ],
      location: 'Cincinnati, OH',
    },
    {
      id: 'hobart-service',
      title: 'Lead Programmer Analyst',

      company: 'Hobart Service',
      dateRange: 'Nov 2006 – May 2011',
      highlights: [
        {
          skills: [
            'Technical Leadership',
            'C#',
            '.NET',
            'SQL Server',
            'SQL',
            'JavaScript',
          ],
          text:
            'Served as founding full-stack technical lead, advising leadership on ' +
            'technology procurement, guiding backend C# / .NET and SQL Server ' +
            'architecture, and directing contract engineers.',
        },
        {
          skills: [
            'C#',
            '.NET',
            'SQL Server',
            'SQL',
            'ETL Pipelines',
          ],
          text:
            'Architected automated B2B ETL pipelines in C# and SQL Server that ' +
            'ingested SFTP feeds (XML, CSV, structured text) and parsed Microsoft ' +
            'Exchange emails with custom schema translation layers—eliminating manual ' +
            'intervention across nationwide service dispatch workflows.',
        },
        {
          skills: ['SQL Server', 'SQL', 'SSRS'],
          text:
            'Partnered with the DBA to tune SQL Server performance and engineered ' +
            'executive operational reporting suites using SQL Server Reporting ' +
            'Services (SSRS).',
        },
      ],
      location: 'Troy, OH',
    },
    {
      id: 'nkparts',
      title: 'Software Developer',

      company: 'NKParts',
      dateRange: 'Mar 2005 – Nov 2006',
      highlights: [
        {
          skills: ['VB.NET', 'VBA', '.NET', 'Accessibility / UX'],
          text:
            'Redesigned high-volume warehouse and logistics data-entry applications ' +
            'in VB.NET and VBA with full keyboard-driven navigation and real-time ' +
            'audio feedback cues, measurably increasing operator throughput and ' +
            'accessibility.',
        },
        {
          skills: ['SQL'],
          text:
            'Hardened security controls and access auditing across internal HR and ' +
            'inventory SQL databases.',
        },
      ],
      location: 'Sidney, OH',
    },
    {
      id: 'bearingpoint',
      title: 'Software Developer',

      company: 'BearingPoint',
      dateRange: 'Oct 2004 – Feb 2005',
      highlights: [
        {
          skills: ['C#', '.NET', 'SQL Server', 'SQL', 'Secure Systems'],
          text:
            'Developed a secure military communications application in C# and .NET ' +
            'at Wright-Patterson Air Force Base (WPAFB) for rapidly disseminating ' +
            'command updates to targeted personnel groups.',
        },
      ],
      location: 'Dayton, OH (WPAFB)',
    },
    {
      id: 'cdo-technologies',
      title: 'Database Specialist & Technical Lead',

      company: 'CDO Technologies LLC',
      dateRange: 'Jan 2000 – Aug 2004',
      highlights: [
        {
          skills: ['SQL Server', 'SQL', 'Dynamic SQL'],
          text:
            'Designed a metadata-driven dynamic SQL search engine that inspected ' +
            'schema topology to construct optimal 3+ table JOIN trees on-the-fly ' +
            'with type-aware filtering and red-teamed SQL injection protection.',
        },
        {
          skills: ['SQL Server', 'SQL', 'ODBC', 'ETL Pipelines'],
          text:
            'Architected automated data scrubbing and normalization pipelines to ' +
            'consolidate historical records from 300+ legacy client systems (Excel, ' +
            'Access, CSV, XML) into a unified SQL Server schema via custom ODBC ' +
            'connections.',
        },
        {
          skills: [
            'Technical Leadership',
            'VB.NET',
            'C#',
            'Classic ASP / VBScript',
            'SQL Server',
          ],
          text:
            'Led the migration of legacy VBScript Classic ASP applications to .NET ' +
            '(VB.NET)—mastering C# to translate early Microsoft .NET documentation ' +
            'and reference patterns into VB.NET—and built an integrated problem and ' +
            'requirements tracking system (a hybrid of Jira and DOORS) inside a ' +
            'high-compliance military environment at WPAFB.',
        },
      ],
      location: 'Dayton, OH (WPAFB)',
    },
    {
      id: 'nike-foundational',
      title: 'Decision Support Developer & Administrative Assistant to Director',

      company: 'Nike (Sport Graphics Division)',
      dateRange: 'Foundational Career (Pre-2000)',
      highlights: [
        {
          skills: ['SQL', 'Teradata Data Warehouse', 'MS Access'],
          text:
            'Self-taught SQL and Microsoft Access to build a division-wide Decision ' +
            'Support System (DSS) that mined Nike’s Teradata enterprise data ' +
            'warehouse, uncovering supply-chain bottlenecks and aging inventory.',
        },
        {
          skills: ['Excel DSS'],
          text:
            'Created an automated HR personnel-tracking Decision Support System in ' +
            'Excel to optimize staffing placement and organizational transitions.',
        },
      ],
      location: 'Beaverton, OR',
    },
    {
      id: 'section-8-foundational',
      title: 'Workflow Automation Specialist',

      company: 'Section 8 Housing Division (Municipal Government)',
      dateRange: 'Foundational Career (Pre-2000)',
      highlights: [
        {
          skills: ['Workflow Automation', 'Process Engineering'],
          text:
            'Engineered automated document and case-processing workflows that ' +
            'eliminated a 2.5-year operational backlog of constituent issues in ' +
            'just over 3 months.',
        },
      ],
      location: 'Tucson, AZ',
    },
  ],

  projects: [
    {
      id: 'vscode-tailor',
      title: 'vscode-tailor',

      category: 'Open-Source Tooling',
      description:
        'Modular VS Code workbench extension featuring an interactive CSV Grid ' +
        'Editor, Rainbow CSV syntax highlighting, and toggleable productivity ' +
        'modules built with zero-dependency TypeScript architecture.',
      liveUrl: null,
      repoUrl: 'https://github.com/cstroliadavis/vscode-tailor',
      skills: [
        'TypeScript',
        'JavaScript',
        'Bun',
        'HTML5 / CSS / LESS / SCSS / PostCSS',
      ],
      tags: ['TypeScript', 'VS Code API', 'Webviews', 'Zero-Bloat'],
    },
    {
      id: 'logging',
      title: 'logging',

      category: 'Open-Source Library',
      description:
        'Lean, event-driven logging library with TC39 Stage 3 decorators, ' +
        'AsyncLocalStorage context propagation, and Datadog JSONL formatting ' +
        'for Bun and TypeScript.',
      liveUrl: null,
      repoUrl: 'https://github.com/cstroliadavis/logging',
      skills: ['TypeScript', 'JavaScript', 'Bun', 'Node.js', 'Datadog'],
      tags: ['TypeScript', 'Bun', 'TC39 Decorators', 'AsyncLocalStorage'],
    },
    {
      id: 'csv-lib',
      title: 'csv-lib',

      category: 'Open-Source Library',
      description:
        'Lightweight, zero-dependency RFC 4180 streaming CSV parser and ' +
        'serializer engineered for Bun and modern JavaScript runtimes.',
      liveUrl: null,
      repoUrl: 'https://github.com/cstroliadavis/csv-lib',
      skills: ['TypeScript', 'JavaScript', 'Bun'],
      tags: ['TypeScript', 'Bun', 'Web Streams', 'Zero-Dependency'],
    },
    {
      id: 'coliner',
      title: 'coliner',

      category: 'Open-Source Library',
      description:
        'Declarative YAML/JSON-driven command-line tool builder with event ' +
        'triggering and smart positional argument assignment running on Bun.',
      liveUrl: null,
      repoUrl: 'https://github.com/cstroliadavis/coliner',
      skills: ['TypeScript', 'JavaScript', 'Bun', 'Node.js'],
      tags: ['TypeScript', 'Bun', 'CLI Architecture'],
    },
    {
      id: 'mcp-concept-mem',
      title: 'mcp-concept-mem',

      category: 'Agentic AI / MCP',
      description:
        'Model Context Protocol (MCP) server architecture for hierarchical AI ' +
        'agent memory with dynamic typing and self-modifying rule governance.',
      liveUrl: null,
      repoUrl: 'https://github.com/cstroliadavis/mcp-concept-mem',
      skills: ['MCP / Agentic AI', 'TypeScript', 'JavaScript', 'Bun', 'Node.js'],
      tags: ['MCP', 'Agentic AI', 'TypeScript', 'Memory Architecture'],
    },
    {
      id: 's20',
      title: 's20 (Spouse 2.0)',

      category: 'Open-Source CLI',
      description:
        'CLI time-tracking, reporting, and workflow automation toolkit built ' +
        'with closure-based TypeScript factories on Bun.',
      liveUrl: null,
      repoUrl: 'https://github.com/cstroliadavis/s20',
      skills: [
        'TypeScript',
        'JavaScript',
        'Bun',
        'Workflow Automation',
      ],
      tags: ['TypeScript', 'Bun', 'CLI'],
    },
    {
      id: 'shop-shop',
      title: 'Shop-Shop (edX E-Commerce & Stripe App)',

      category: 'edX Bootcamp Creation',
      description:
        'Full-stack MERN e-commerce application built during the edX bootcamp, ' +
        'featuring React, Redux Toolkit state management, Apollo GraphQL API, ' +
        'IndexedDB offline cart persistence, and Stripe checkout integration.',
      liveUrl: null,
      repoUrl: 'https://github.com/cstroliadavis/shop-shop',
      skills: [
        'React',
        'Redux',
        'JavaScript',
        'Node.js',
        'Express',
        'GraphQL',
        'MongoDB',
        'Stripe',
      ],
      tags: ['React', 'Redux Toolkit', 'GraphQL', 'Stripe', 'MongoDB'],
    },
    {
      id: 'photo-port',
      title: 'Photo Port (edX React SPA)',

      category: 'edX Bootcamp Creation',
      description:
        'Single-page React photography portfolio application built as an edX ' +
        '(2U) bootcamp curriculum project with gallery filtering and modal ' +
        'lightbox previews.',
      liveUrl: 'https://cstroliadavis.github.io/photo-port/',
      repoUrl: 'https://github.com/cstroliadavis/photo-port',
      skills: ['React', 'JavaScript', 'HTML5 / CSS / LESS / SCSS / PostCSS'],
      tags: ['React', 'SPA', 'Live Demo', 'edX Curriculum'],
    },
  ],

  skillCategories: [
    'Programming Languages',
    'Frameworks',
    'Soft Skills',
    'Patterns and Protocols',
    'Tools',
  ],

  skillCompetencies: [
    { name: 'JavaScript', category: 'Programming Languages', proficiency: 98 },
    { name: 'SQL', category: 'Programming Languages', proficiency: 97 },
    { name: 'TypeScript', category: 'Programming Languages', proficiency: 97 },
    { name: 'PostgreSQL', category: 'Tools', proficiency: 96 },
    { name: 'Technical Leadership', category: 'Soft Skills', proficiency: 95 },
    {
      name: 'HTML5 / CSS / LESS / SCSS / PostCSS',

      category: 'Programming Languages',
      proficiency: 94,
    },
    { name: 'Node.js', category: 'Frameworks', proficiency: 93 },
    { name: 'Bun', category: 'Tools', proficiency: 92 },
    { name: 'Express', category: 'Frameworks', proficiency: 92 },
    { name: 'Dynamic SQL', category: 'Programming Languages', proficiency: 91 },
    { name: 'SQL Server', category: 'Tools', proficiency: 90 },
    { name: 'Vue.js', category: 'Frameworks', proficiency: 89 },
    { name: 'REST APIs', category: 'Patterns and Protocols', proficiency: 89 },
    { name: 'Git', category: 'Tools', proficiency: 88 },
    { name: 'TDD', category: 'Patterns and Protocols', proficiency: 87 },
    { name: 'AngularJS', category: 'Frameworks', proficiency: 87 },
    { name: 'Handlebars.js', category: 'Frameworks', proficiency: 86 },
    {
      name: 'Workflow Automation',

      category: 'Patterns and Protocols',
      proficiency: 85,
    },
    { name: 'Vite', category: 'Tools', proficiency: 84 },
    { name: 'Vitest', category: 'Tools', proficiency: 84 },
    { name: 'React', category: 'Frameworks', proficiency: 83 },
    { name: 'C#', category: 'Programming Languages', proficiency: 82 },
    { name: '.NET', category: 'Frameworks', proficiency: 82 },
    { name: 'LINQ', category: 'Frameworks', proficiency: 81 },
    {
      name: 'Accessibility / UX',

      category: 'Patterns and Protocols',
      proficiency: 80,
    },
    { name: 'Redis', category: 'Tools', proficiency: 79 },
    { name: 'Docker', category: 'Tools', proficiency: 79 },
    { name: 'MongoDB', category: 'Tools', proficiency: 78 },
    { name: 'OpenAPI', category: 'Patterns and Protocols', proficiency: 77 },
    { name: 'Datadog', category: 'Tools', proficiency: 77 },
    { name: 'Process Engineering', category: 'Soft Skills', proficiency: 76 },
    { name: 'Mob Programming', category: 'Soft Skills', proficiency: 75 },
    { name: 'jQuery', category: 'Frameworks', proficiency: 74 },
    { name: 'XSLT 1.0', category: 'Programming Languages', proficiency: 74 },
    { name: 'Storybook', category: 'Tools', proficiency: 73 },
    { name: 'Redux', category: 'Frameworks', proficiency: 72 },
    { name: 'Elasticsearch', category: 'Tools', proficiency: 72 },
    { name: 'OAuth', category: 'Patterns and Protocols', proficiency: 71 },
    { name: 'Rollup', category: 'Tools', proficiency: 70 },
    { name: 'Web Workers', category: 'Patterns and Protocols', proficiency: 69 },
    {
      name: 'Secure Systems',

      category: 'Patterns and Protocols',
      proficiency: 69,
    },
    { name: 'Kibana', category: 'Tools', proficiency: 68 },
    { name: 'DB2 SQL', category: 'Programming Languages', proficiency: 67 },
    { name: 'SSRS', category: 'Tools', proficiency: 67 },
    { name: 'MS Access', category: 'Tools', proficiency: 66 },
    { name: 'ASP.NET', category: 'Frameworks', proficiency: 65 },
    { name: 'VB.NET', category: 'Programming Languages', proficiency: 64 },
    { name: 'WinForms', category: 'Frameworks', proficiency: 64 },
    { name: 'WPF', category: 'Frameworks', proficiency: 63 },
    { name: 'GraphQL', category: 'Patterns and Protocols', proficiency: 62 },
    { name: 'Stripe', category: 'Tools', proficiency: 62 },
    { name: 'Groovy', category: 'Programming Languages', proficiency: 61 },
    {
      name: 'ETL Pipelines',

      category: 'Patterns and Protocols',
      proficiency: 60,
    },
    { name: 'ODBC', category: 'Patterns and Protocols', proficiency: 59 },
    {
      name: 'MCP / Agentic AI',

      category: 'Patterns and Protocols',
      proficiency: 59,
    },
    { name: 'SharePoint', category: 'Tools', proficiency: 58 },
    { name: 'VBA', category: 'Programming Languages', proficiency: 57 },
    {
      name: 'Classic ASP / VBScript',

      category: 'Programming Languages',
      proficiency: 57,
    },
    { name: 'Python', category: 'Programming Languages', proficiency: 56 },
    { name: 'Java', category: 'Programming Languages', proficiency: 55 },
    { name: 'Selenium', category: 'Tools', proficiency: 54 },
    { name: 'Spring Boot', category: 'Frameworks', proficiency: 54 },
    { name: 'Excel DSS', category: 'Tools', proficiency: 53 },
    {
      name: 'Oracle PL/SQL',

      category: 'Programming Languages',
      proficiency: 52,
    },
    { name: 'AWS', category: 'Tools', proficiency: 52 },
    { name: 'Kubernetes', category: 'Tools', proficiency: 51 },
    { name: 'Kafka', category: 'Tools', proficiency: 50 },
    { name: 'SOAP', category: 'Patterns and Protocols', proficiency: 49 },
    { name: 'Dojo Toolkit', category: 'Frameworks', proficiency: 49 },
    { name: 'Teradata Data Warehouse', category: 'Tools', proficiency: 48 },
  ],

  summaryParagraphs: [
    'People-centered Principal and Staff Software Engineer with 15+ years of ' +
      'architectural leadership (and 25+ years in software engineering) ' +
      'designing, scaling, and modernizing full-stack web platforms, ' +
      'distributed systems, and enterprise data pipelines.',
    'Because much of my career has been spent in high-impact consulting and ' +
      'technical rescue engagements, I have worked across a wide spectrum of ' +
      'architectures—from modern TypeScript, Node.js, Bun, React, and Vue.js ' +
      'platforms to deep PostgreSQL/SQL Server tuning and 20+ years of C#/.NET ' +
      'systems. That breadth gives me a practical lens on what scales, what ' +
      'breaks under load, and how to eliminate accidental complexity.',
  ],
};
