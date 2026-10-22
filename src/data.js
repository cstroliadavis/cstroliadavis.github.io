/**
 * Structured portfolio, project, article, and skill-tagged experience data.
 * Designed so adding new pre-CDO roles or achievement bullets automatically
 * integrates with the multi-select skill-set filter.
 */
export const PORTFOLIO_DATA = {
  id: 'cstroliadavis-portfolio',
  name: 'Christopher Strolia-Davis',
  title:
    'Principal & Staff Software Engineer | Technical Leader | Full-Stack Architect',

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

  education: {
    certifications: ['Professional Scrum Developer (PSD)'],
    degree: 'Bachelor of Science in Business Information Systems',
    gpa: '3.94 GPA',
    institution: 'University of Phoenix',
  },

  experience: [
    {
      id: 'self-employed',
      title: 'Software Engineer / Consultant',

      company: 'Self-Employed',
      dateRange: 'Nov 2023 – Present',
      era: 'primary',
      highlights: [
        {
          skills: ['typescript', 'javascript', 'frontend', 'performance'],
          text:
            'Architected a reusable Web Worker Higher-Order Function (HOF) wrapper ' +
            'that converted synchronous functions into asynchronous worker-thread ' +
            'operations, eliminating 20+ second main-thread freezes and browser crash ' +
            'prompts for enterprise clients filtering large datasets while avoiding ' +
            'costly backend cloud compute calls.',
        },
        {
          skills: ['sql', 'csharp', 'performance'],
          text:
            'Diagnosed and resolved a severe database performance bottleneck in a ' +
            'multi-tenant publishing pipeline; re-architected legacy SQL Server query ' +
            'patterns using Common Table Expressions (CTEs) and indexed in-memory ' +
            'table variables to prune non-indexable JSON payloads, reducing execution ' +
            'time from hours to under 2 minutes and eliminating daily timeout crashes.',
        },
        {
          skills: ['typescript', 'javascript', 'frontend', 'leadership'],
          text:
            'Engineered a low-profile search component with multi-page highlighting, ' +
            'leveraging existing AngularJS and TypeScript architecture to avoid a ' +
            'costly rewrite while introducing modern coding standards to guide future ' +
            'architectural shifts.',
        },
        {
          skills: ['csharp', 'typescript', 'leadership'],
          text:
            'Stepped in as technical lead to research, design, and deliver a ' +
            'high-priority, secure C# / .NET REST API integration Proof of Concept ' +
            '(POC) with custom security hooks to satisfy urgent enterprise customer ' +
            'data exchange requirements.',
        },
        {
          skills: ['typescript', 'javascript', 'csharp', 'leadership'],
          text:
            'Proactively improved the health of a 10+ year-old legacy codebase by ' +
            'systematically replacing anti-patterns with clean, maintainable patterns ' +
            'and enforcing higher code quality standards across multiple contract ' +
            'extensions.',
        },
        {
          skills: ['ai-mcp', 'typescript', 'javascript', 'node-bun'],
          text:
            'Designed and published open-source TypeScript/Bun developer tooling ' +
            '(vscode-tailor, logging, csv-lib, coliner, s20) and Model Context ' +
            'Protocol (MCP) server architectures for hierarchical AI agent memory.',
        },
      ],
      location: 'Remote',
      technologies: [
        'TypeScript',
        'JavaScript',
        'React',
        'AngularJS',
        'C#',
        '.NET',
        'SQL Server',
        'Web Workers',
        'Bun',
        'Vite',
        'Storybook',
        'MCP / Agentic AI',
      ],
    },
    {
      id: 'alined',
      title: 'Sr. React Developer',

      company: 'ALINED Consulting Group, LLC',
      dateRange: 'Aug 2023 – Nov 2023',
      era: 'primary',
      highlights: [
        {
          skills: ['react', 'typescript', 'javascript', 'frontend'],
          text:
            'Developed and enhanced user-facing features for an enterprise financial ' +
            'application using React, TypeScript, Vite, and Vitest.',
        },
        {
          skills: ['react', 'typescript', 'frontend'],
          text:
            'Integrated a proprietary in-house component library and design system, ' +
            'collaborating closely with product stakeholders to maintain a seamless, ' +
            'accessible user experience.',
        },
        {
          skills: ['node-bun', 'java', 'typescript', 'javascript'],
          text:
            'Collaborated with backend engineers to design and integrate RESTful API ' +
            'service endpoints across Node.js and Java services.',
        },
      ],
      location: 'Columbus, OH (Hybrid)',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Java',
        'Vite',
        'Vitest',
      ],
    },
    {
      id: 'swarm-solutions',
      title: 'Sr. JavaScript Developer',

      company: 'Swarm Solutions',
      dateRange: 'Mar 2019 – Jun 2023',
      era: 'primary',
      highlights: [
        {
          skills: ['distributed', 'node-bun', 'javascript', 'performance'],
          text:
            'Engineered a Redis-backed semaphore queue manager to eliminate ' +
            'thundering-herd database deadlocks and connection pool exhaustion when ' +
            'spinning up 40+ load-balanced application instances simultaneously, ' +
            'securing zero-downtime automated deployments for a platform serving ' +
            'millions of users across 400+ stations.',
        },
        {
          skills: ['sql', 'distributed', 'node-bun', 'javascript'],
          text:
            'Engineered and executed a multi-month data migration for Audacy.com, ' +
            'rewriting 100,000+ records across PostgreSQL and Elasticsearch to ' +
            'decouple site-origin identifiers from database keys, eliminating a ' +
            'critical CMS architectural constraint with zero downtime.',
        },
        {
          skills: ['node-bun', 'vue', 'javascript', 'distributed'],
          text:
            'Co-developed a multi-tenant Node.js, Vue.js, and Handlebars publishing ' +
            'platform (Clay CMS) backed by Fastly CDN, consolidating 400+ fragmented ' +
            'legacy Drupal deployments into a unified architecture supporting ' +
            'localized station feeds and canonical national publishing.',
        },
        {
          skills: ['react', 'typescript', 'javascript', 'node-bun', 'frontend'],
          text:
            'Developed the React and TypeScript frontend for a federated ' +
            'authentication and authorization system, seamlessly integrating with ' +
            'Node.js backend services and custom Google OAuth / Passport.js flows.',
        },
        {
          skills: ['distributed', 'node-bun', 'javascript'],
          text:
            'Utilized Apache Kafka for event streaming and distributed messaging to ' +
            'support high-throughput, decoupled microservices containerized with ' +
            'Docker and Kubernetes.',
        },
        {
          skills: ['leadership', 'typescript', 'javascript', 'node-bun'],
          text:
            'Served as a go-to Subject Matter Expert (SME) and technical mentor ' +
            'across distributed teams; partnered directly with company founders to ' +
            'shape high-trust, remote-first engineering practices that measurably ' +
            'accelerated development velocity.',
        },
      ],
      location: 'Remote',
      technologies: [
        'Node.js',
        'Vue.js',
        'React',
        'TypeScript',
        'JavaScript',
        'PostgreSQL',
        'Redis',
        'Elasticsearch',
        'Kafka',
        'Docker',
        'Kubernetes',
        'Jest',
      ],
    },
    {
      id: 'edx',
      title: 'Full Stack JavaScript Instructor (Part-Time)',

      company: 'edX (2U)',
      dateRange: 'Oct 2022 – Apr 2023',
      era: 'primary',
      highlights: [
        {
          skills: ['leadership', 'javascript', 'react', 'node-bun'],
          text:
            'Taught an intensive 6-month full-stack software development bootcamp ' +
            '(MongoDB, Express, React, Node.js, GraphQL) to a cohort of 25+ ' +
            'aspiring developers.',
        },
        {
          skills: ['leadership', 'react', 'node-bun', 'sql', 'javascript'],
          text:
            'Provided live architectural instruction, code reviews, debugging ' +
            'mentorship, and reference implementations covering SQL/NoSQL data ' +
            'modeling, JWT/OAuth security, Apollo GraphQL, and Stripe payment ' +
            'processing.',
        },
      ],
      location: 'Remote',
      technologies: [
        'JavaScript',
        'React',
        'Node.js',
        'Express',
        'GraphQL',
        'MongoDB',
        'SQL',
        'Stripe',
        'OAuth',
      ],
    },
    {
      id: 'ingage-claritas',
      title: 'Sr. Consultant',

      company: 'Ingage Partners / Claritas',
      dateRange: 'Apr 2018 – Feb 2019',
      era: 'primary',
      highlights: [
        {
          skills: ['sql', 'performance', 'leadership'],
          text:
            'Rescued a stalled Oracle-to-EDB PostgreSQL migration by mastering native ' +
            'JSONB and PostGIS internals, replacing fragile ad-hoc string parsing ' +
            'with GIN/expression indexes and CTEs in stored procedures, and authoring ' +
            'database optimization guidelines for the Lead DBA.',
        },
        {
          skills: ['leadership', 'frontend', 'javascript'],
          text:
            'Led technical discovery conversations directly with stakeholders and ' +
            'end-users to uncover root constraints, and flexibly transitioned from ' +
            'backend database engineering to take ownership of front-end architecture ' +
            'and mentor in-house developers.',
        },
      ],
      location: 'Montgomery, OH',
      technologies: [
        'PostgreSQL',
        'PostGIS',
        'JSONB',
        'Oracle',
        'SQL',
        'JavaScript',
      ],
    },
    {
      id: 'eliassen-kroger',
      title: 'Sr. Software Developer',

      company: 'Eliassen Group / Kroger Digital',
      dateRange: 'Dec 2017 – Feb 2018',
      era: 'primary',
      highlights: [
        {
          skills: ['java', 'distributed'],
          text:
            'Contributed to an enterprise taxonomy platform by building backend ' +
            'microservices with Java, Spring Framework, and Apache Kafka.',
        },
        {
          skills: ['react', 'javascript', 'frontend'],
          text:
            'Assisted with front-end SPA architecture using React, Redux, and Rollup.',
        },
      ],
      location: 'Blue Ash, OH',
      technologies: ['React', 'Redux', 'Java', 'Spring', 'Kafka', 'Rollup'],
    },
    {
      id: 'gaig-2015',
      title: 'App Analysis & Development Specialist',

      company: 'Great American Insurance Group',
      dateRange: 'Oct 2015 – Dec 2017',
      era: 'primary',
      highlights: [
        {
          skills: ['javascript', 'frontend', 'performance'],
          text:
            'Re-architected a data-intensive PDF generation pipeline using Web ' +
            'Workers to offload heavy JSON payload parsing and HTML DOM composition ' +
            'off the main thread, dropping processing time for large datasets from ' +
            '5+ minute timeouts to a few seconds.',
        },
        {
          skills: ['javascript', 'performance'],
          text:
            'Authored a custom JavaScript profiler to dynamically instrument function ' +
            'calls and isolate memory leaks caused by pseudo-Java OOP anti-patterns ' +
            'in single-page applications, eliminating browser crashes during large ' +
            'dataset processing.',
        },
        {
          skills: ['java', 'sql'],
          text:
            'Navigated a complex backend rules ecosystem (Java, Groovy, Spring) ' +
            'backed by Oracle DB and a multi-dimensional graph structure (n-cube), ' +
            'reverse-engineering undocumented data relationships and documenting ' +
            'architectural patterns for the engineering team.',
        },
      ],
      location: 'Cincinnati, OH',
      technologies: [
        'JavaScript',
        'Web Workers',
        'HTML5',
        'Java',
        'Groovy',
        'Spring',
        'Oracle SQL',
      ],
    },
    {
      id: 'ingage-2015',
      title: 'Senior Consultant',

      company: 'Ingage Partners, LLC',
      dateRange: 'Jan 2015 – Dec 2015',
      era: 'primary',
      highlights: [
        {
          skills: ['sql', 'performance', 'leadership'],
          text:
            'Executed high-impact consulting engagements, including optimizing a ' +
            'SQL Server database for the Cincinnati Reds while mentoring their ' +
            'in-house developer on query tuning and indexing strategies.',
        },
        {
          skills: ['leadership'],
          text:
            'Acted as a technical consultant in pre-sales engagements—analyzing ' +
            'client requirements to deliver effort estimations and cost-benefit ' +
            'analyses—and vetted incoming engineering candidates through technical ' +
            'interviews.',
        },
      ],
      location: 'Cincinnati, OH',
      technologies: ['SQL Server', 'C#', '.NET', 'JavaScript', 'Technical Leadership'],
    },
    {
      id: 'cincinnati-insurance',
      title: 'Senior Consultant',

      company: 'Cincinnati Insurance Group (via Ingage Partners)',
      dateRange: 'Jan 2014 – Dec 2014',
      era: 'primary',
      highlights: [
        {
          skills: ['csharp', 'leadership'],
          text:
            'Proposed and championed the Adapter Pattern as the organization-wide ' +
            'go-forward architecture for decoupling third-party API integrations.',
        },
        {
          skills: ['csharp', 'performance', 'leadership'],
          text:
            'Mentored fellow developers on asynchronous C# / .NET programming ' +
            'patterns to eliminate UI thread blocking in a legacy WinForms ' +
            'enterprise application.',
        },
        {
          skills: ['csharp'],
          text:
            'Reverse-engineered and documented an external partner web service whose ' +
            'production payloads contradicted its official specification, preventing ' +
            'downstream integration defects.',
        },
      ],
      location: 'Fairfield, OH',
      technologies: ['C#', '.NET', 'WinForms', 'SOAP / REST APIs'],
    },
    {
      id: 'gaig-2013',
      title: 'Senior Consultant',

      company: 'Great American Insurance Group (via Ingage Partners)',
      dateRange: 'Jun 2013 – Dec 2013',
      era: 'primary',
      highlights: [
        {
          skills: ['leadership', 'javascript'],
          text:
            'Drove the adoption of modern engineering practices by establishing ' +
            'Test-Driven Development (TDD) as a team standard and leading the ' +
            'migration from CVS to Git.',
        },
        {
          skills: ['javascript', 'frontend', 'leadership'],
          text:
            'Architected core components for an internal AngularJS UI library ' +
            '(UI Bootstrap) used across the enterprise, applying design patterns for ' +
            'loose coupling and training developers across multiple product teams.',
        },
      ],
      location: 'Cincinnati, OH',
      technologies: ['JavaScript', 'AngularJS', 'TDD', 'Git', 'HTML5 / CSS'],
    },
    {
      id: 'cchmc-2012',
      title: 'Senior Consultant',

      company: "Cincinnati Children's Medical Center (via Ingage Partners)",
      dateRange: 'Jul 2012 – Jun 2013',
      era: 'primary',
      highlights: [
        {
          skills: ['csharp', 'sql', 'performance'],
          text:
            'Dramatically improved clinical metrics reporting (PMRS) performance by ' +
            'optimizing critical C# and SQL code paths, reducing processing times on ' +
            'key operations from over 5 minutes to under 10 seconds.',
        },
        {
          skills: ['javascript', 'frontend', 'leadership'],
          text:
            'Introduced modern frontend architecture patterns including LESS for ' +
            'modular stylesheets and reactive data-binding UIs, delivering critical ' +
            'Fetal Care application enhancements ahead of schedule.',
        },
      ],
      location: 'Cincinnati, OH',
      technologies: ['C#', 'ASP.NET', 'SQL Server', 'JavaScript', 'LESS'],
    },
    {
      id: 'pg-2012',
      title: 'Senior Consultant',

      company: 'Procter & Gamble (via Ingage Partners)',
      dateRange: 'Mar 2012 – Jul 2012',
      era: 'primary',
      highlights: [
        {
          skills: ['performance', 'csharp'],
          text:
            'Re-architected a failing enterprise reporting system as the sole ' +
            'developer, restoring business-critical functionality while ' +
            'substantially reducing memory consumption and render latency.',
        },
        {
          skills: ['frontend', 'performance'],
          text:
            'Refactored an unmaintainable XSLT 1.0 data-transformation codebase into ' +
            'modular, functional templates and isolated an undocumented platform ' +
            'defect where staging edits leaked into production.',
        },
      ],
      location: 'Cincinnati, OH',
      technologies: ['.NET', 'XSLT / XML', 'SharePoint', 'JavaScript'],
    },
    {
      id: 'cchmc-2011',
      title: 'Senior Consultant',

      company: "Cincinnati Children's Medical Center (via Ingage Partners)",
      dateRange: 'Jun 2011 – Feb 2012',
      era: 'primary',
      highlights: [
        {
          skills: ['csharp', 'javascript', 'leadership'],
          text:
            'Mentored the full-time engineering team in modern JavaScript, jQuery, ' +
            'and C# LINQ patterns while maintaining mission-critical ASP.NET ' +
            'external integration portals and internal system health monitors.',
        },
      ],
      location: 'Cincinnati, OH',
      technologies: ['C#', 'ASP.NET', 'LINQ', 'JavaScript', 'jQuery', 'SQL Server'],
    },
    {
      id: 'hobart-service',
      title: 'Lead Programmer Analyst',

      company: 'Hobart Service',
      dateRange: 'Nov 2006 – May 2011',
      era: 'primary',
      highlights: [
        {
          skills: ['leadership', 'csharp', 'sql'],
          text:
            'Served as founding full-stack technical lead, advising leadership on ' +
            'technology procurement, guiding backend architecture, and directing ' +
            'contract engineers.',
        },
        {
          skills: ['sql', 'csharp'],
          text:
            'Architected automated B2B ETL pipelines in C# and SQL Server that ' +
            'ingested SFTP feeds (XML, CSV, structured text) and parsed Microsoft ' +
            'Exchange emails with custom schema translation layers—eliminating manual ' +
            'intervention across nationwide service dispatch workflows.',
        },
        {
          skills: ['sql', 'performance'],
          text:
            'Partnered with the DBA to tune SQL Server performance and engineered ' +
            'executive operational reporting suites using SQL Server Reporting ' +
            'Services (SSRS).',
        },
      ],
      location: 'Troy, OH',
      technologies: [
        'C#',
        '.NET',
        'SQL Server',
        'SSRS',
        'ETL Pipelines',
        'XML / CSV',
        'JavaScript',
      ],
    },
    {
      id: 'nkparts',
      title: 'Software Developer',

      company: 'NKParts',
      dateRange: 'Mar 2005 – Nov 2006',
      era: 'early',
      highlights: [
        {
          skills: ['frontend', 'javascript', 'csharp'],
          text:
            'Redesigned high-volume warehouse and logistics data-entry applications ' +
            'with full keyboard-driven navigation and real-time audio feedback cues, ' +
            'measurably increasing operator throughput and accessibility.',
        },
        {
          skills: ['sql', 'csharp'],
          text:
            'Hardened security controls and access auditing across internal HR and ' +
            'inventory databases.',
        },
      ],
      location: 'Sidney, OH',
      technologies: ['C#', '.NET', 'SQL', 'JavaScript', 'Accessibility / UX'],
    },
    {
      id: 'bearingpoint',
      title: 'Software Developer',

      company: 'BearingPoint',
      dateRange: 'Oct 2004 – Feb 2005',
      era: 'early',
      highlights: [
        {
          skills: ['csharp', 'sql'],
          text:
            'Developed a secure military communications application at Wright-Patterson ' +
            'Air Force Base (WPAFB) for rapidly disseminating command updates to ' +
            'targeted personnel groups.',
        },
      ],
      location: 'Dayton, OH (WPAFB)',
      technologies: ['C#', '.NET', 'SQL Server', 'Secure Systems'],
    },
    {
      id: 'cdo-technologies',
      title: 'Database Specialist & Technical Lead',

      company: 'CDO Technologies LLC',
      dateRange: 'Jan 2000 – Aug 2004',
      era: 'early',
      highlights: [
        {
          skills: ['sql', 'csharp', 'performance'],
          text:
            'Designed a metadata-driven dynamic SQL search engine that inspected ' +
            'schema topology to construct optimal 3+ table JOIN trees on-the-fly ' +
            'with type-aware filtering and red-teamed SQL injection protection.',
        },
        {
          skills: ['sql', 'csharp'],
          text:
            'Architected automated data scrubbing and normalization pipelines to ' +
            'consolidate historical records from 300+ legacy client systems (Excel, ' +
            'Access, CSV, XML) into a unified SQL Server schema via custom ODBC ' +
            'connections.',
        },
        {
          skills: ['leadership', 'csharp', 'sql'],
          text:
            'Built an integrated problem and requirements tracking system (a custom ' +
            'hybrid of Jira and DOORS) and led the development team within a ' +
            'high-compliance military environment at WPAFB.',
        },
      ],
      location: 'Dayton, OH (WPAFB)',
      technologies: [
        'SQL Server',
        'Dynamic SQL',
        'ODBC / ETL',
        'C# / .NET',
        'Technical Leadership',
      ],
    },
    {
      id: 'nike-foundational',
      title: 'Decision Support Developer & Administrative Assistant to Director',

      company: 'Nike (Sport Graphics Division)',
      dateRange: 'Foundational Career (Pre-2000)',
      era: 'foundational',
      highlights: [
        {
          skills: ['sql', 'performance'],
          text:
            'Self-taught SQL and Microsoft Access to build a division-wide Decision ' +
            'Support System (DSS) that mined Nike’s Teradata enterprise data ' +
            'warehouse, uncovering supply-chain bottlenecks and aging inventory.',
        },
        {
          skills: ['leadership'],
          text:
            'Created an automated HR personnel-tracking Decision Support System in ' +
            'Excel to optimize staffing placement and organizational transitions.',
        },
      ],
      location: 'Beaverton, OR',
      technologies: ['SQL', 'Teradata Data Warehouse', 'MS Access', 'Excel DSS'],
    },
    {
      id: 'section-8-foundational',
      title: 'Workflow Automation Specialist',

      company: 'Section 8 Housing Division (Municipal Government)',
      dateRange: 'Foundational Career (Pre-2000)',
      era: 'foundational',
      highlights: [
        {
          skills: ['performance', 'leadership'],
          text:
            'Engineered automated document and case-processing workflows that ' +
            'eliminated a 2.5-year operational backlog of constituent issues in ' +
            'just over 3 months.',
        },
      ],
      location: 'Tucson, AZ',
      technologies: ['Workflow Automation', 'Process Engineering'],
    },
  ],

  headline:
    'Architecting resilient distributed systems, high-throughput data pipelines, ' +
    'and zero-bloat TypeScript, C#/.NET, SQL, and Agentic AI software.',

  links: [
    {
      id: 'linkedin',
      title: 'LinkedIn',

      handle: 'in/cstroliadavis',
      url: 'https://www.linkedin.com/in/cstroliadavis/',
    },
    {
      id: 'github',
      title: 'GitHub',

      handle: 'github.com/cstroliadavis',
      url: 'https://github.com/cstroliadavis',
    },
    {
      id: 'medium',
      title: 'Medium',

      handle: '@cstroliadavis',
      url: 'https://medium.com/@cstroliadavis',
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
      skills: ['typescript', 'javascript', 'node-bun', 'frontend'],
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
      skills: ['typescript', 'javascript', 'node-bun', 'distributed'],
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
      skills: ['typescript', 'javascript', 'node-bun', 'performance'],
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
      skills: ['typescript', 'javascript', 'node-bun'],
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
      skills: ['ai-mcp', 'typescript', 'javascript', 'node-bun'],
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
      skills: ['typescript', 'javascript', 'node-bun'],
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
      skills: ['react', 'javascript', 'node-bun', 'frontend'],
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
      skills: ['react', 'javascript', 'frontend'],
      tags: ['React', 'SPA', 'Live Demo', 'edX Curriculum'],
    },
  ],

  skillFilters: [
    {
      id: 'all',
      label: 'All Experience & Projects',
    },
    {
      id: 'typescript',
      label: 'TypeScript',
    },
    {
      id: 'javascript',
      label: 'JavaScript',
    },
    {
      id: 'node-bun',
      label: 'Node.js & Bun',
    },
    {
      id: 'react',
      label: 'React & Redux',
    },
    {
      id: 'vue',
      label: 'Vue.js',
    },
    {
      id: 'frontend',
      label: 'Frontend & Web Workers',
    },
    {
      id: 'sql',
      label: 'SQL (PostgreSQL / SQL Server)',
    },
    {
      id: 'csharp',
      label: 'C# & .NET',
    },
    {
      id: 'distributed',
      label: 'Redis, Kafka & Distributed Systems',
    },
    {
      id: 'performance',
      label: 'Performance & Query Tuning',
    },
    {
      id: 'ai-mcp',
      label: 'AI & Model Context Protocol (MCP)',
    },
    {
      id: 'leadership',
      label: 'Technical Leadership & Mentorship',
    },
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
