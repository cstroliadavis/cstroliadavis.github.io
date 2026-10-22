import { PORTFOLIO_DATA } from './data.js';

/**
 * Escapes HTML special characters for safe DOM rendering.
 */
function escapeHtml(value) {
  const text = String(value ?? '');

  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * Maps a raw technology badge label to a skill filter ID if applicable.
 */
function mapTechLabelToSkillId(label) {
  const normalized = label.toLowerCase();

  if (
    normalized.includes('typescript') ||
    normalized.includes('javascript') ||
    normalized.includes('angularjs') ||
    normalized.includes('jquery')
  ) {
    return 'ts-js';
  }

  if (
    normalized.includes('node') ||
    normalized.includes('bun') ||
    normalized.includes('express')
  ) {
    return 'node-bun';
  }

  if (normalized.includes('react') || normalized.includes('redux')) {
    return 'react';
  }

  if (normalized.includes('vue')) {
    return 'vue';
  }

  if (
    normalized.includes('sql') ||
    normalized.includes('postgres') ||
    normalized.includes('postgis') ||
    normalized.includes('oracle') ||
    normalized.includes('teradata') ||
    normalized.includes('odbc') ||
    normalized.includes('ssrs')
  ) {
    return 'sql';
  }

  if (
    normalized.includes('c#') ||
    normalized.includes('.net') ||
    normalized.includes('linq') ||
    normalized.includes('winforms')
  ) {
    return 'csharp';
  }

  if (
    normalized.includes('redis') ||
    normalized.includes('kafka') ||
    normalized.includes('elasticsearch') ||
    normalized.includes('docker') ||
    normalized.includes('kubernetes')
  ) {
    return 'distributed';
  }

  if (normalized.includes('mcp') || normalized.includes('ai')) {
    return 'ai-mcp';
  }

  if (normalized.includes('leadership')) {
    return 'leadership';
  }

  if (
    normalized.includes('worker') ||
    normalized.includes('html') ||
    normalized.includes('less') ||
    normalized.includes('ux')
  ) {
    return 'frontend';
  }

  return null;
}

/**
 * Renders the HTML string for a single Medium article card.
 */
function renderArticleCard(article) {
  const badge = escapeHtml(article.badge);
  const date = escapeHtml(article.date);
  const summary = escapeHtml(article.summary);
  const title = escapeHtml(article.title);
  const url = escapeHtml(article.url);

  return `
    <article class="card article-card">
      <div class="card-meta">
        <span class="badge badge-subtle">${badge}</span>
        <span class="meta-date">${date}</span>
      </div>
      <h3 class="card-title">
        <a
          class="card-link"

          href="${url}"
          rel="noopener noreferrer"
          target="_blank"
        >${title}</a>
      </h3>
      <p class="card-description">${summary}</p>
      <div class="card-actions">
        <a
          class="action-link"

          href="${url}"
          rel="noopener noreferrer"
          target="_blank"
        >Read on Medium &rarr;</a>
      </div>
    </article>
  `;
}

/**
 * Renders a single work experience entry with filtered achievement bullets.
 */
function renderExperienceCard(role, activeSkill, expandedRoles) {
  const isAll = activeSkill === 'all';
  const isExpanded = expandedRoles.has(role.id);
  const matchingHighlights = isAll
    ? role.highlights
    : role.highlights.filter((item) => item.skills.includes(activeSkill));

  if (matchingHighlights.length === 0) {
    return '';
  }

  const displayedHighlights = isExpanded ? role.highlights : matchingHighlights;
  const hiddenCount = role.highlights.length - matchingHighlights.length;
  const company = escapeHtml(role.company);
  const dateRange = escapeHtml(role.dateRange);
  const location = escapeHtml(role.location);
  const roleId = escapeHtml(role.id);
  const title = escapeHtml(role.title);

  const bulletsHtml = displayedHighlights
    .map((item) => {
      const isDirectMatch =
        !isAll && item.skills.includes(activeSkill) && isExpanded;
      const itemClass = isDirectMatch
        ? 'experience-bullet is-highlighted-bullet'
        : 'experience-bullet';

      return `<li class="${itemClass}">${escapeHtml(item.text)}</li>`;
    })
    .join('');

  const techBadgesHtml = role.technologies
    .map((tech) => {
      const mappedSkill = mapTechLabelToSkillId(tech);
      const isMatchedTech = !isAll && mappedSkill === activeSkill;
      const badgeClass = isMatchedTech
        ? 'tech-pill is-active-tech'
        : 'tech-pill';
      const dataAttr = mappedSkill
        ? `data-skill-trigger="${escapeHtml(mappedSkill)}"`
        : '';

      return `<button class="${badgeClass}" ${dataAttr} type="button">${escapeHtml(tech)}</button>`;
    })
    .join('');

  let expandControlHtml = '';

  if (!isAll && hiddenCount > 0) {
    const buttonLabel = isExpanded
      ? `Show only ${matchingHighlights.length} matching achievement${
          matchingHighlights.length === 1 ? '' : 's'
        }`
      : `Showing ${matchingHighlights.length} of ${role.highlights.length} achievements · Show all ${role.highlights.length}`;

    expandControlHtml = `
      <div class="role-filter-footer">
        <button
          class="role-expand-btn"

          data-expand-role="${roleId}"
          type="button"
        >${escapeHtml(buttonLabel)}</button>
      </div>
    `;
  }

  return `
    <article class="card experience-card">
      <header class="experience-header">
        <div class="experience-title-group">
          <h3 class="experience-role">${title}</h3>
          <div class="experience-company-line">
            <span class="experience-company">${company}</span>
            <span class="meta-separator">&middot;</span>
            <span class="experience-location">${location}</span>
          </div>
        </div>
        <div class="experience-date">${dateRange}</div>
      </header>
      <ul class="experience-bullets">
        ${bulletsHtml}
      </ul>
      ${expandControlHtml}
      <footer class="experience-tech-list" aria-label="Technologies used">
        ${techBadgesHtml}
      </footer>
    </article>
  `;
}

/**
 * Renders a project card with repository and optional live demo links.
 */
function renderProjectCard(project, activeSkill) {
  const isAll = activeSkill === 'all';
  const matchesSkill = isAll || project.skills.includes(activeSkill);

  if (!matchesSkill) {
    return '';
  }

  const category = escapeHtml(project.category);
  const description = escapeHtml(project.description);
  const repoUrl = escapeHtml(project.repoUrl);
  const title = escapeHtml(project.title);

  const tagsHtml = project.tags
    .map((tag) => `<span class="tech-tag">${escapeHtml(tag)}</span>`)
    .join('');

  const liveLinkHtml = project.liveUrl
    ? `<a
        class="action-link action-link-primary"

        href="${escapeHtml(project.liveUrl)}"
        rel="noopener noreferrer"
        target="_blank"
      >Live Demo &rarr;</a>`
    : '';

  return `
    <article class="card project-card">
      <div class="card-meta">
        <span class="badge badge-category">${category}</span>
      </div>
      <h3 class="card-title">
        <a
          class="card-link"

          href="${repoUrl}"
          rel="noopener noreferrer"
          target="_blank"
        >${title}</a>
      </h3>
      <p class="card-description">${description}</p>
      <div class="project-tags">${tagsHtml}</div>
      <div class="card-actions">
        ${liveLinkHtml}
        <a
          class="action-link"

          href="${repoUrl}"
          rel="noopener noreferrer"
          target="_blank"
        >GitHub Repository &rarr;</a>
      </div>
    </article>
  `;
}

/**
 * Creates the interactive portfolio controller using closure-based state.
 */
export function createPortfolioApp(data = PORTFOLIO_DATA) {
  const _ = {
    activeSkill: 'all',
    data,
    elements: {},
    expandedRoles: new Set(),
  };

  const renderFilterBar = () => {
    if (!_.elements.skillFilterList) {
      return;
    }

    const buttonsHtml = _.data.skillFilters
      .map((filter) => {
        const isActive = filter.id === _.activeSkill;
        const btnClass = isActive
          ? 'filter-pill is-active'
          : 'filter-pill';
        const ariaPressed = isActive ? 'true' : 'false';

        return `
          <button
            class="${btnClass}"

            aria-pressed="${ariaPressed}"
            data-skill-id="${escapeHtml(filter.id)}"
            type="button"
          >${escapeHtml(filter.label)}</button>
        `;
      })
      .join('');

    _.elements.skillFilterList.innerHTML = buttonsHtml;
  };

  const renderStatusBanner = (matchedRoleCount, matchedBulletCount, matchedProjectCount) => {
    if (!_.elements.filterStatus) {
      return;
    }

    if (_.activeSkill === 'all') {
      const totalBullets = _.data.experience.reduce(
        (sum, role) => sum + role.highlights.length,
        0,
      );

      _.elements.filterStatus.innerHTML = `
        <span>Showing all <strong>${_.data.experience.length}</strong> career roles,
        <strong>${totalBullets}</strong> key achievements, and
        <strong>${_.data.projects.length}</strong> featured projects.
        Select any skill above—or click a technology tag on any role—to filter.</span>
      `;

      return;
    }

    const activeFilterObj = _.data.skillFilters.find(
      (item) => item.id === _.activeSkill,
    );
    const activeLabel = activeFilterObj ? activeFilterObj.label : _.activeSkill;

    _.elements.filterStatus.innerHTML = `
      <span>Filtered by <strong>${escapeHtml(activeLabel)}</strong>:
      showing <strong>${matchedBulletCount}</strong> matching achievement${
        matchedBulletCount === 1 ? '' : 's'
      } across <strong>${matchedRoleCount}</strong> work location${
        matchedRoleCount === 1 ? '' : 's'
      } and <strong>${matchedProjectCount}</strong> project${
        matchedProjectCount === 1 ? '' : 's'
      }.</span>
      <button
        class="reset-filter-btn"

        data-reset-filter="true"
        type="button"
      >Reset Filter &times;</button>
    `;
  };

  const renderDynamicSections = () => {
    const isAll = _.activeSkill === 'all';
    let matchedRoleCount = 0;
    let matchedBulletCount = 0;

    const experienceHtml = _.data.experience
      .map((role) => {
        const matchingBullets = isAll
          ? role.highlights
          : role.highlights.filter((item) => item.skills.includes(_.activeSkill));

        if (matchingBullets.length > 0) {
          matchedRoleCount += 1;
          matchedBulletCount += matchingBullets.length;
        }

        return renderExperienceCard(role, _.activeSkill, _.expandedRoles);
      })
      .filter(Boolean)
      .join('');

    if (_.elements.experienceList) {
      _.elements.experienceList.innerHTML = experienceHtml;
    }

    const matchedProjects = _.data.projects.filter(
      (project) => isAll || project.skills.includes(_.activeSkill),
    );

    if (_.elements.projectList) {
      const projectsToRender =
        matchedProjects.length > 0 ? matchedProjects : _.data.projects;
      _.elements.projectList.innerHTML = projectsToRender
        .map((project) => renderProjectCard(project, 'all'))
        .join('');
    }

    renderFilterBar();
    renderStatusBanner(
      matchedRoleCount,
      matchedBulletCount,
      matchedProjects.length,
    );
  };

  const controller = {
    init() {
      Object.assign(_.elements, {
        articleList: document.getElementById('article-list'),
        experienceList: document.getElementById('experience-list'),
        filterStatus: document.getElementById('filter-status'),
        heroSummary: document.getElementById('hero-summary'),
        projectList: document.getElementById('project-list'),
        skillFilterList: document.getElementById('skill-filter-list'),
      });

      if (_.elements.heroSummary) {
        _.elements.heroSummary.innerHTML = _.data.summaryParagraphs
          .map((paragraph) => `<p class="hero-paragraph">${escapeHtml(paragraph)}</p>`)
          .join('');
      }

      if (_.elements.articleList) {
        _.elements.articleList.innerHTML = _.data.articles
          .map((article) => renderArticleCard(article))
          .join('');
      }

      renderDynamicSections();

      document.addEventListener('click', (event) => {
        const target = event.target.closest(
          '[data-skill-id], [data-skill-trigger], [data-reset-filter], [data-expand-role]',
        );

        if (!target) {
          return;
        }

        if (target.hasAttribute('data-reset-filter')) {
          controller.setSkillFilter('all');

          return;
        }

        if (target.hasAttribute('data-expand-role')) {
          const roleId = target.getAttribute('data-expand-role');

          if (_.expandedRoles.has(roleId)) {
            _.expandedRoles.delete(roleId);
          } else {
            _.expandedRoles.add(roleId);
          }

          renderDynamicSections();

          return;
        }

        const skillId =
          target.getAttribute('data-skill-id') ||
          target.getAttribute('data-skill-trigger');

        if (skillId) {
          const nextSkill =
            _.activeSkill === skillId && target.hasAttribute('data-skill-id')
              ? 'all'
              : skillId;

          controller.setSkillFilter(nextSkill);
        }
      });
    },

    setSkillFilter(skillId) {
      _.activeSkill = skillId;
      _.expandedRoles.clear();
      renderDynamicSections();
    },
  };

  return controller;
}

if (typeof document !== 'undefined') {
  const app = createPortfolioApp();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
  } else {
    app.init();
  }
}
