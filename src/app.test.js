import { afterEach, describe, expect, it } from 'bun:test';

import { createPortfolioApp } from './app.js';
import { PORTFOLIO_DATA } from './data.js';

const ORIGINAL_DOCUMENT = globalThis.document;

describe('PORTFOLIO_DATA skill integrity', () => {
  it('includes every work experience bullet skill in skillCompetencies and vice versa', () => {
    const bulletSkillSet = new Set(
      PORTFOLIO_DATA.experience.flatMap((role) =>
        role.highlights.flatMap((bullet) => bullet.skills),
      ),
    );
    const sidebarSkillSet = new Set(
      PORTFOLIO_DATA.skillCompetencies.map((item) => item.name),
    );

    for (const tech of bulletSkillSet) {
      expect(sidebarSkillSet.has(tech)).toBe(true);
    }

    for (const skill of sidebarSkillSet) {
      expect(bulletSkillSet.has(skill)).toBe(true);
    }
  });

  it('assigns every skill competency to one of the five defined categories', () => {
    const validCategories = new Set(PORTFOLIO_DATA.skillCategories);

    for (const item of PORTFOLIO_DATA.skillCompetencies) {
      expect(validCategories.has(item.category)).toBe(true);
    }
  });
});

describe('createPortfolioApp', () => {
  const setup = (customData = PORTFOLIO_DATA) => {
    const attrs = {};
    const elements = Object.freeze({
      'article-list': { innerHTML: '' },
      'experience-list': { innerHTML: '' },
      'filter-status': { innerHTML: '' },
      'hero-summary': { innerHTML: '' },
      'project-list': { innerHTML: '' },
      'skill-competency-list': { innerHTML: '' },
      'skills-sidebar': { className: 'skills-sidebar' },
      'top-menu-toggle': {
        innerHTML: '',

        setAttribute(name, value) {
          attrs[name] = value;
        },
      },
    });
    const listeners = [];

    globalThis.document = {
      readyState: 'complete',

      addEventListener(type, handler) {
        listeners.push({ handler, type });
      },
      getElementById(id) {
        return elements[id] ?? null;
      },
    };

    const app = createPortfolioApp(customData);

    app.init();

    return { app, attrs, elements, listeners };
  };

  afterEach(() => {
    globalThis.document = ORIGINAL_DOCUMENT;
  });

  it('renders categorized skills with top 3 items and expand handles when > 3', () => {
    const { app, elements } = setup();
    const sidebarHtml = elements['skill-competency-list'].innerHTML;

    expect(elements['filter-status'].innerHTML).toContain(
      `Showing all <strong>${PORTFOLIO_DATA.experience.length}</strong> career roles`,
    );
    expect(sidebarHtml).toContain('Programming Languages:');
    expect(sidebarHtml).toContain('Frameworks:');
    expect(sidebarHtml).toContain('Soft Skills:');
    expect(sidebarHtml).toContain('Patterns and Protocols:');
    expect(sidebarHtml).toContain('Tools:');

    expect(sidebarHtml).toContain('data-skill-trigger="JavaScript"');
    expect(sidebarHtml).not.toContain('data-skill-trigger="Python"');
    expect(sidebarHtml).toContain(
      'data-expand-category="Programming Languages"',
    );
    expect(sidebarHtml).not.toContain('data-expand-category="Soft Skills"');

    app.toggleCategory('Programming Languages');

    expect(elements['skill-competency-list'].innerHTML).toContain(
      'data-skill-trigger="Python"',
    );
    expect(elements['skill-competency-list'].innerHTML).toContain(
      'Show top 3',
    );
  });

  it('toggles the responsive top menu and displays active skill count in toggle button', () => {
    const { app, attrs, elements } = setup();

    expect(elements['skills-sidebar'].className).toBe('skills-sidebar');
    expect(attrs['aria-expanded']).toBe('false');

    app.toggleMenu();

    expect(elements['skills-sidebar'].className).toBe(
      'skills-sidebar is-menu-open',
    );
    expect(attrs['aria-expanded']).toBe('true');

    app.toggleSkillFilter('TypeScript');

    expect(elements['top-menu-toggle'].innerHTML).toContain(
      'Menu &amp; Skills (1)',
    );
  });

  it('filters roles to C# and separates C# from VB.NET roles', () => {
    const { app, elements } = setup();

    app.toggleSkillFilter('C#');

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
    expect(elements['skill-competency-list'].innerHTML).toContain(
      'class="competency-box is-active"',
    );
    expect(elements['skill-competency-list'].innerHTML).toContain('+ 11 more');
  });

  it('routes delegated clicks: menu, outside close, filter, expand, and reset', () => {
    const { elements, listeners } = setup();
    const onClick = listeners[0].handler;

    const makeTarget = (attrMap, insideMenu = false) => ({
      closest(selector) {
        if (selector.includes('#skills-sidebar')) return insideMenu ? {} : null;

        const matchedKey = Object.keys(attrMap).find((key) =>
          selector.includes(`[${key}]`),
        );

        if (!matchedKey) return null;

        return {
          getAttribute: (name) => attrMap[name] ?? null,
          hasAttribute: (name) => name in attrMap,
        };
      },
    });

    onClick({ target: makeTarget({ 'data-toggle-menu': 'true' }, true) });
    expect(elements['skills-sidebar'].className).toBe(
      'skills-sidebar is-menu-open',
    );

    onClick({ target: makeTarget({ 'data-close-menu': 'true' }, true) });
    expect(elements['skills-sidebar'].className).toBe('skills-sidebar');

    onClick({ target: makeTarget({ 'data-toggle-menu': 'true' }, true) });
    onClick({ target: makeTarget({}, false) });
    expect(elements['skills-sidebar'].className).toBe('skills-sidebar');

    onClick({
      target: makeTarget({ 'data-expand-category': 'Programming Languages' }),
    });
    expect(elements['skill-competency-list'].innerHTML).toContain(
      'data-skill-trigger="Python"',
    );

    onClick({ target: makeTarget({ 'data-skill-trigger': 'Redis' }) });
    expect(elements['experience-list'].innerHTML).toContain(
      'Showing 1 of 5 achievements',
    );
    expect(elements['experience-list'].innerHTML).not.toContain(
      'Project Unity',
    );

    onClick({
      target: makeTarget({ 'data-expand-role': 'swarm-solutions' }),
    });
    expect(elements['experience-list'].innerHTML).toContain('Project Unity');
    expect(elements['experience-list'].innerHTML).toContain(
      'Show only 1 matching achievement',
    );

    onClick({ target: makeTarget({ 'data-reset-filter': 'true' }) });
    expect(elements['filter-status'].innerHTML).toContain(
      `Showing all <strong>${PORTFOLIO_DATA.experience.length}</strong> career roles`,
    );
  });

  it('filters roles by individual work-experience skills such as VB.NET or Redis', () => {
    const { app, elements } = setup();

    app.toggleSkillFilter('VB.NET');

    expect(elements['experience-list'].innerHTML).toContain('NKParts');
    expect(elements['experience-list'].innerHTML).toContain(
      'CDO Technologies LLC',
    );
    expect(elements['experience-list'].innerHTML).not.toContain('BearingPoint');

    app.clearSkills();
    app.toggleSkillFilter('Redis');

    expect(elements['experience-list'].innerHTML).toContain('Swarm Solutions');
    expect(elements['experience-list'].innerHTML).toContain(
      'semaphore queue manager',
    );
    expect(elements['experience-list'].innerHTML).not.toContain(
      'Kroger Digital',
    );
  });

  it('supports multi-select skill filtering across TypeScript, Vue.js, and C#', () => {
    const { app, elements } = setup();

    app.toggleSkillFilter('TypeScript');
    app.toggleSkillFilter('Vue.js');
    app.toggleSkillFilter('C#');

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
