import { describe, expect, it } from 'bun:test';

import { createPortfolioApp, mapTechLabelToSkillId } from './app.js';
import { PORTFOLIO_DATA } from './data.js';

describe('mapTechLabelToSkillId', () => {
  it('maps filterable technology labels to their skill filter IDs', () => {
    expect(mapTechLabelToSkillId('TypeScript')).toBe('typescript');
    expect(mapTechLabelToSkillId('Vue.js')).toBe('vue');
    expect(mapTechLabelToSkillId('React')).toBe('react');
    expect(mapTechLabelToSkillId('C#')).toBe('csharp');
    expect(mapTechLabelToSkillId('WPF')).toBe('csharp');
    expect(mapTechLabelToSkillId('PostgreSQL (PL/pgSQL, JSONB, PostGIS)')).toBe(
      'sql',
    );
    expect(mapTechLabelToSkillId('LINQ')).toBe('sql');
    expect(mapTechLabelToSkillId('AWS (EC2, S3, OpenSearch, ElastiCache)')).toBe(
      'distributed',
    );
    expect(mapTechLabelToSkillId('Vite')).toBe('frontend');
    expect(mapTechLabelToSkillId('XSLT 1.0')).toBe('frontend');
    expect(mapTechLabelToSkillId('Mob Programming')).toBe('leadership');
  });

  it('returns null for non-filterable technology labels including VB.NET and Java', () => {
    expect(mapTechLabelToSkillId('VB.NET')).toBeNull();
    expect(mapTechLabelToSkillId('VBA')).toBeNull();
    expect(mapTechLabelToSkillId('Java')).toBeNull();
    expect(mapTechLabelToSkillId('Spring Boot')).toBeNull();
    expect(mapTechLabelToSkillId('SharePoint')).toBeNull();
    expect(mapTechLabelToSkillId('GraphQL')).toBeNull();
  });
});

describe('createPortfolioApp', () => {
  const setup = (customData = PORTFOLIO_DATA) => {
    const elements = Object.freeze({
      'article-list': { innerHTML: '' },
      'experience-list': { innerHTML: '' },
      'filter-status': { innerHTML: '' },
      'hero-summary': { innerHTML: '' },
      'project-list': { innerHTML: '' },
      'skill-filter-list': { innerHTML: '' },
    });

    const listeners = [];

    globalThis.document = {
      addEventListener(type, handler) {
        listeners.push({ handler, type });
      },
      getElementById(id) {
        return elements[id] ?? null;
      },
      readyState: 'complete',
    };

    const app = createPortfolioApp(customData);
    app.init();

    return { app, elements, listeners };
  };

  it('renders all career roles, projects, and articles on initial load', () => {
    const { elements } = setup();

    expect(elements['filter-status'].innerHTML).toContain(
      `Showing all <strong>${PORTFOLIO_DATA.experience.length}</strong> career roles`,
    );
    expect(elements['experience-list'].innerHTML).toContain('Self-Employed');
    expect(elements['experience-list'].innerHTML).toContain('NKParts');
    expect(elements['project-list'].innerHTML).toContain('vscode-tailor');
    expect(elements['project-list'].innerHTML).toContain('Photo Port');
    expect(elements['article-list'].innerHTML).toContain(
      'Building MCP Servers: Part 1',
    );
  });

  it('renders unmapped technology badges as non-interactive spans and mapped badges as buttons', () => {
    const { elements } = setup();
    const experienceHtml = elements['experience-list'].innerHTML;

    expect(experienceHtml).toContain('<span class="tech-tag">VB.NET</span>');
    expect(experienceHtml).toContain('<span class="tech-tag">Java</span>');
    expect(experienceHtml).toContain(
      '<button class="tech-pill" data-skill-trigger="csharp" type="button">C#</button>',
    );
  });

  it('filters roles to C# & .NET and displays empty project notice when zero projects match', () => {
    const { app, elements } = setup();

    app.toggleSkillFilter('csharp');

    expect(elements['experience-list'].innerHTML).toContain(
      'Cincinnati Insurance Group',
    );
    expect(elements['experience-list'].innerHTML).not.toContain('NKParts');
    expect(elements['experience-list'].innerHTML).not.toContain(
      'Procter &amp; Gamble',
    );
    expect(elements['filter-status'].innerHTML).toContain(
      'and <strong>0</strong> projects',
    );
    expect(elements['project-list'].innerHTML).toContain('empty-filter-card');
    expect(elements['project-list'].innerHTML).not.toContain('vscode-tailor');
  });

  it('supports multi-select skill filtering across TypeScript, Vue.js, and C#', () => {
    const { app, elements } = setup();

    app.toggleSkillFilter('typescript');
    app.toggleSkillFilter('vue');
    app.toggleSkillFilter('csharp');

    expect(elements['filter-status'].innerHTML).toContain(
      '<strong>3</strong> selected',
    );
    expect(elements['experience-list'].innerHTML).toContain('Swarm Solutions');
    expect(elements['experience-list'].innerHTML).toContain(
      'Cincinnati Insurance Group',
    );

    app.clearSkills();

    expect(elements['filter-status'].innerHTML).toContain(
      `Showing all <strong>${PORTFOLIO_DATA.experience.length}</strong> career roles`,
    );
  });

  it('binds the document click listener only once when init is called repeatedly', () => {
    const { app, listeners } = setup();

    app.init();
    app.init();

    expect(listeners.length).toBe(1);
  });
});
