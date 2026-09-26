/**
 * Projects Showcase, Filtering, Interactive Skill Explorer, Dynamic Search & In-Depth Case Study Modal
 * Displays authentic architecture, implementation code, verified GitHub repositories, and dynamic search/count.
 */

import { projectsData } from '../data/portfolioData.js';
import { trackEvent } from '../utils/analytics.js';

export function initProjects() {
  const container = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const activeSkillBadge = document.getElementById('active-skill-filter');
  const searchInput = document.getElementById('project-search-input');
  const searchClearBtn = document.getElementById('project-search-clear');
  const countBadge = document.getElementById('project-count-badge');
  const modalBackdrop = document.getElementById('study-modal-backdrop');
  const modalCloseBtn = document.getElementById('study-modal-close');

  let currentCategory = 'All';
  let activeSkillFilter = null;
  let currentSearchQuery = '';

  // Initial Render & Count Calculation
  applyFilters();

  // Category Filter Buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentCategory = btn.getAttribute('data-filter') || 'All';
      activeSkillFilter = null;
      hideActiveSkillBadge();
      applyFilters();
      trackEvent('project_filter_change', { category: currentCategory });
    });
  });

  // Real-Time Project Search Input
  searchInput?.addEventListener('input', () => {
    currentSearchQuery = searchInput.value.trim().toLowerCase();
    if (searchClearBtn) {
      searchClearBtn.style.display = currentSearchQuery.length > 0 ? 'inline-flex' : 'none';
    }
    applyFilters();
    trackEvent('project_search', { query: currentSearchQuery });
  });

  // Search Clear Button
  searchClearBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    currentSearchQuery = '';
    searchClearBtn.style.display = 'none';
    searchInput?.focus();
    applyFilters();
  });

  // Modal Close Listeners
  modalCloseBtn?.addEventListener('click', () => closeModal());
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  // Keyboard accessibility: Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('open')) {
      closeModal();
    }
  });

  function closeModal() {
    modalBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function applyFilters() {
    let filtered = projectsData;

    // 1. Category Filter (All, Full Stack, AI, Backend, Database, Web)
    if (currentCategory !== 'All') {
      filtered = filtered.filter((p) => 
        p.category.some((cat) => cat.toLowerCase() === currentCategory.toLowerCase())
      );
    }

    // 2. Active Skill Filter (From Interactive Skill Explorer)
    if (activeSkillFilter) {
      filtered = filtered.filter((p) => 
        p.technologies.some((tech) => tech.toLowerCase().includes(activeSkillFilter.toLowerCase()))
      );
    }

    // 3. Search Query Filter (Project Name, Description, Technologies, Features, Categories)
    if (currentSearchQuery) {
      filtered = filtered.filter((p) => {
        const titleMatch = p.title.toLowerCase().includes(currentSearchQuery);
        const taglineMatch = p.tagline.toLowerCase().includes(currentSearchQuery);
        const overviewMatch = p.caseStudy?.overview?.toLowerCase().includes(currentSearchQuery);
        const problemMatch = p.caseStudy?.problem?.toLowerCase().includes(currentSearchQuery);
        const solutionMatch = p.caseStudy?.solution?.toLowerCase().includes(currentSearchQuery);
        const techMatch = p.technologies.some((t) => t.toLowerCase().includes(currentSearchQuery));
        const featureMatch = p.keyFeatures.some((f) => f.toLowerCase().includes(currentSearchQuery)) ||
          p.caseStudy?.features?.some((f) => f.toLowerCase().includes(currentSearchQuery));
        const categoryMatch = p.category.some((c) => c.toLowerCase().includes(currentSearchQuery));

        return titleMatch || taglineMatch || overviewMatch || problemMatch || solutionMatch || techMatch || featureMatch || categoryMatch;
      });
    }

    // Update Dynamic Count Badge
    updateDynamicCount(filtered.length, projectsData.length);

    // Render Cards
    renderProjects(filtered, container);
  }

  function updateDynamicCount(displayedCount, totalCount) {
    if (!countBadge) return;
    if (displayedCount === totalCount) {
      countBadge.textContent = `${totalCount} Verified Projects`;
    } else {
      countBadge.textContent = `Showing ${displayedCount} of ${totalCount} Projects`;
    }
  }

  function showActiveSkillBadge(skillName) {
    if (activeSkillBadge) {
      activeSkillBadge.innerHTML = `Skill Filter: <strong>${escapeHtml(skillName)}</strong> <button type="button" class="btn-clear-filter" aria-label="Clear filter" style="background:none; border:none; color:inherit; cursor:pointer; margin-left:6px; font-weight:bold;">✕</button>`;
      activeSkillBadge.classList.add('visible');

      const clearBtn = activeSkillBadge.querySelector('.btn-clear-filter');
      clearBtn?.addEventListener('click', () => {
        activeSkillFilter = null;
        hideActiveSkillBadge();
        applyFilters();
      });
    }
  }

  function hideActiveSkillBadge() {
    if (activeSkillBadge) {
      activeSkillBadge.classList.remove('visible');
    }
  }

  // Global skill click handler for Interactive Skill Explorer
  window.filterProjectsBySkill = (skillName) => {
    if (!skillName) {
      activeSkillFilter = null;
      hideActiveSkillBadge();
      currentCategory = 'All';
      currentSearchQuery = '';
      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';
      filterButtons.forEach((b) => {
        if (b.getAttribute('data-filter') === 'All') {
          b.classList.add('active');
          b.setAttribute('aria-selected', 'true');
        } else {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        }
      });
      applyFilters();
      return;
    }

    activeSkillFilter = skillName;
    showActiveSkillBadge(skillName);
    
    // Reset category filter to All
    filterButtons.forEach((b) => {
      if (b.getAttribute('data-filter') === 'All') {
        b.classList.add('active');
        b.setAttribute('aria-selected', 'true');
      } else {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      }
    });
    currentCategory = 'All';

    applyFilters();

    // Scroll smoothly to projects section
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    trackEvent('skill_explorer_filter', { skill: skillName });
  };

  // Global helper to open a project modal by ID
  window.openProjectModal = (projectId) => {
    const proj = projectsData.find((p) => p.id === projectId);
    if (proj) {
      openCaseStudyModal(proj);
      trackEvent('view_case_study', { project: proj.title });
    }
  };
}

function renderProjects(projects, container) {
  if (!container) return;
  container.innerHTML = '';

  if (projects.length === 0) {
    const emptyBox = document.createElement('div');
    emptyBox.className = 'projects-empty-state';
    emptyBox.style.gridColumn = '1/-1';
    emptyBox.style.textAlign = 'center';
    emptyBox.style.padding = '3.5rem 1.5rem';
    emptyBox.style.background = 'var(--bg-card)';
    emptyBox.style.border = '1px solid var(--border-subtle)';
    emptyBox.style.borderRadius = 'var(--radius-lg)';
    emptyBox.innerHTML = `
      <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
      <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">No Matching Projects Found</h3>
      <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.5rem; max-width: 480px; margin-inline: auto;">
        No verified projects match your current category, skill, or keyword search criteria.
      </p>
      <button type="button" class="btn btn-primary btn-sm reset-filter-btn">
        Reset All Filters &amp; Search
      </button>
    `;
    emptyBox.querySelector('.reset-filter-btn')?.addEventListener('click', () => {
      window.filterProjectsBySkill(null);
    });
    container.appendChild(emptyBox);
    return;
  }

  projects.forEach((proj, idx) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.id = `project-card-${proj.id}`;
    card.innerHTML = `
      <div>
        <div class="project-card-header">
          <div>
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan); font-weight:600; margin-bottom:0.25rem; letter-spacing:0.04em;">
              #0${idx + 1} • ${escapeHtml(proj.projectType || proj.category.join(' • '))}
            </div>
            <h3 class="project-title">${escapeHtml(proj.title)}</h3>
            <p class="project-tagline">${escapeHtml(proj.tagline)}</p>
          </div>
          <span class="badge ${proj.maturityClass}">${escapeHtml(proj.maturity)}</span>
        </div>

        <div class="project-arch-preview" style="margin: 1.25rem 0;" title="Architecture Flow Preview">
          ${escapeHtml(proj.architecturePreview)}
        </div>

        <div style="margin-bottom: 1.25rem;">
          <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.4rem; text-transform:uppercase; letter-spacing:0.04em;">KEY ARCHITECTURAL HIGHLIGHTS</div>
          <ul class="project-features-preview">
            ${proj.keyFeatures.slice(0, 3).map((f) => `<li><span style="color:var(--accent-cyan);">▹</span> ${escapeHtml(f)}</li>`).join('')}
          </ul>
        </div>

        <!-- Developer Mode Panel (Visible in Dev Mode) -->
        <div class="dev-mode-panel">
          <div class="dev-mode-label">⚡ DEV SPECIFICATIONS</div>
          <div class="dev-spec-row"><span class="dev-spec-key">Architecture:</span> <span class="dev-spec-val">${escapeHtml(proj.category.join(' • '))}</span></div>
          <div class="dev-spec-row"><span class="dev-spec-key">Repository:</span> <span class="dev-spec-val">${escapeHtml(proj.github.replace('https://github.com/', ''))}</span></div>
          <div class="dev-spec-row"><span class="dev-spec-key">Status:</span> <span class="dev-spec-val">${escapeHtml(proj.maturity)}</span></div>
        </div>
      </div>

      <div>
        <div class="project-tech-tags" style="margin-bottom: 1.25rem;">
          ${proj.technologies.map((t) => `<span class="project-tech-tag">${escapeHtml(t)}</span>`).join('')}
        </div>

        <div class="project-card-actions">
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View source code on GitHub for ${proj.title}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <button type="button" class="btn btn-primary btn-sm view-study-btn" data-id="${proj.id}" aria-label="View deep dive case study for ${proj.title}">
            Case Study ▹
          </button>
        </div>
      </div>
    `;

    // Attach click handler for Case Study Modal
    card.querySelector('.view-study-btn')?.addEventListener('click', () => {
      openCaseStudyModal(proj);
      trackEvent('view_case_study', { project: proj.title });
    });

    container.appendChild(card);
  });
}

function openCaseStudyModal(proj) {
  const modalBackdrop = document.getElementById('study-modal-backdrop');
  const modalHeader = document.getElementById('study-modal-title-group');
  const modalBody = document.getElementById('study-modal-content');
  const modalFooter = document.getElementById('study-modal-footer-actions');

  if (!modalBackdrop || !modalBody) return;

  const cs = proj.caseStudy;

  modalHeader.innerHTML = `
    <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.4rem; flex-wrap:wrap;">
      <span class="badge ${proj.maturityClass}">${escapeHtml(proj.maturity)}</span>
      <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan);">${escapeHtml(proj.projectType || proj.category.join(' • '))}</span>
    </div>
    <h3 style="font-size:1.8rem; margin:0; color:var(--text-primary);">${escapeHtml(proj.title)}</h3>
    <p style="margin-top:0.25rem; font-size:1rem; color:var(--text-secondary);">${escapeHtml(proj.tagline)}</p>
  `;

  // Render modal content
  modalBody.innerHTML = `
    <!-- 01 - Problem -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">01</span>
        <span>The Problem &amp; Context</span>
      </div>
      <div class="study-box">${escapeHtml(cs.problem)}</div>
    </section>

    <!-- 02 - Approach / Solution -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">02</span>
        <span>Engineering Solution</span>
      </div>
      <div class="study-box">${escapeHtml(cs.solution || cs.approach)}</div>
    </section>

    <!-- 03 - Workflow Pipeline -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">03</span>
        <span>Workflow Pipeline</span>
      </div>
      <div class="study-workflow-banner">
        ${escapeHtml(cs.workflow)}
      </div>
    </section>

    <!-- 04 - Architecture Flow -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">04</span>
        <span>System Architecture</span>
      </div>
      <pre class="study-arch-diagram">${escapeHtml(cs.architecture)}</pre>
    </section>

    <!-- Interactive Candidate Ranking Visualization (Dedicated for Candidate Ranking System) -->
    ${proj.id === 'candidate-ranking-system' ? renderCandidateRankingSimulation() : ''}

    <!-- 05 - Technologies -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">05</span>
        <span>Verified Technologies &amp; Architecture</span>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
        ${cs.technologies.map((t) => `<span class="badge badge-cyan" style="font-size:0.85rem; padding:0.4rem 0.8rem;">${escapeHtml(t)}</span>`).join('')}
      </div>
    </section>

    <!-- 06 - Implementation Code Snippet -->
    ${cs.codeSnippet ? `
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">06</span>
        <span>Core Architectural Code</span>
      </div>
      <div style="background:var(--term-bg); border:1px solid var(--border-medium); border-radius:var(--radius-sm); padding:1rem; overflow-x:auto;">
        <pre style="margin:0; font-family:var(--font-mono); font-size:0.825rem; color:var(--term-text); line-height:1.5;"><code>${escapeHtml(cs.codeSnippet)}</code></pre>
      </div>
    </section>
    ` : ''}

    <!-- 07 - Implemented Features -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">07</span>
        <span>Implemented Functionality</span>
      </div>
      <ul class="study-features-list">
        ${cs.features.map((f) => `<li class="study-feature-item"><span class="study-feature-bullet">✓</span> <span>${escapeHtml(f)}</span></li>`).join('')}
      </ul>
    </section>

    <!-- 08 - Key Learnings -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">08</span>
        <span>Engineering Learnings &amp; Trade-Offs</span>
      </div>
      <div class="study-box" style="border-left: 3px solid var(--accent-cyan);">
        ${escapeHtml(cs.learning)}
      </div>
    </section>

    <!-- 09 - Future Roadmap -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">09</span>
        <span>Future Improvements</span>
      </div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem; font-style:italic;">
        The following capabilities are planned architectural enhancements and are not claimed as completed features:
      </div>
      <ul class="study-features-list">
        ${cs.futureImprovements.map((imp) => `<li class="study-feature-item"><span class="study-feature-bullet" style="color:var(--accent-amber);">▹</span> <span>${escapeHtml(imp)}</span></li>`).join('')}
      </ul>
    </section>
  `;

  // Attach interactive controls if Candidate Ranking System
  if (proj.id === 'candidate-ranking-system') {
    initCandidateRankingSimulationListeners(modalBody);
  }

  modalFooter.innerHTML = `
    <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--text-muted);">
      Individual Engineering Implementation
    </span>
    <div style="display:flex; gap:0.75rem;">
      <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        View Repository ↗
      </a>
      <button type="button" class="btn btn-primary btn-sm modal-done-btn">
        Close Case Study
      </button>
    </div>
  `;

  modalFooter.querySelector('.modal-done-btn')?.addEventListener('click', () => {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  });

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Interactive Candidate Ranking Visualization with Anonymized Sample Demo Data
 */
const SAMPLE_CANDIDATES = [
  { id: "Ref #A-101", tech: 95, skills: 90, acad: 88, status: "Top Shortlist" },
  { id: "Ref #B-204", tech: 88, skills: 86, acad: 85, status: "Recommended" },
  { id: "Ref #C-309", tech: 82, skills: 80, acad: 81, status: "Qualified" },
  { id: "Ref #D-412", tech: 75, skills: 78, acad: 74, status: "Under Review" }
];

function renderCandidateRankingSimulation() {
  return `
    <section class="study-section candidate-ranking-sim-section">
      <div class="study-section-title">
        <span class="study-section-number">⭐</span>
        <span>Candidate Ranking Visualization (Anonymized Demo Data)</span>
      </div>
      <div class="ranking-sim-card">
        <div class="ranking-sim-header">
          <div>
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:0.25rem;">
              SIMULATED MULTI-CRITERIA SCORING PIPELINE
            </div>
            <p style="margin:0; font-size:0.9rem; color:var(--text-secondary);">
              Interactive live demonstration of the multi-factor weighted scoring and sorting algorithm.
            </p>
          </div>
          <div class="ranking-weight-presets" role="group" aria-label="Scoring Weight Presets">
            <button type="button" class="ranking-preset-btn active" data-w-tech="0.40" data-w-skills="0.35" data-w-acad="0.25">
              Balanced (40/35/25)
            </button>
            <button type="button" class="ranking-preset-btn" data-w-tech="0.60" data-w-skills="0.25" data-w-acad="0.15">
              Tech Heavy (60/25/15)
            </button>
            <button type="button" class="ranking-preset-btn" data-w-tech="0.25" data-w-skills="0.55" data-w-acad="0.20">
              Skills Heavy (25/55/20)
            </button>
          </div>
        </div>

        <!-- Leaderboard Table Container -->
        <div id="sim-ranking-table-container" class="ranking-table-wrapper">
          <!-- Populated by JavaScript -->
        </div>

        <div class="ranking-sim-footer">
          <span style="color:var(--accent-cyan); font-weight:bold;">* Note:</span>
          <span>
            Clearly labelled sample demo data simulating the deterministic ranking algorithm. Zero fabricated metrics.
          </span>
        </div>
      </div>
    </section>
  `;
}

function initCandidateRankingSimulationListeners(container) {
  const tableContainer = container.querySelector('#sim-ranking-table-container');
  const presetButtons = container.querySelectorAll('.ranking-preset-btn');

  let currentWeights = { tech: 0.40, skills: 0.35, acad: 0.25 };

  function renderTable() {
    if (!tableContainer) return;

    // Calculate composite scores and sort descending
    const calculated = SAMPLE_CANDIDATES.map((cand) => {
      const composite = (cand.tech * currentWeights.tech) + 
                        (cand.skills * currentWeights.skills) + 
                        (cand.acad * currentWeights.acad);
      return {
        ...cand,
        compositeScore: Number(composite.toFixed(1))
      };
    }).sort((a, b) => b.compositeScore - a.compositeScore);

    tableContainer.innerHTML = `
      <table class="ranking-demo-table" aria-label="Candidate Ranking Leaderboard">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Candidate ID</th>
            <th>Technical (${Math.round(currentWeights.tech * 100)}%)</th>
            <th>Skills Fit (${Math.round(currentWeights.skills * 100)}%)</th>
            <th>Academic (${Math.round(currentWeights.acad * 100)}%)</th>
            <th>Composite Score</th>
            <th>Evaluation Status</th>
          </tr>
        </thead>
        <tbody>
          ${calculated.map((cand, idx) => `
            <tr class="ranking-row ${idx === 0 ? 'top-rank' : ''}">
              <td class="ranking-pos">
                <span class="rank-num">0${idx + 1}</span>
              </td>
              <td class="ranking-id">
                <code>${escapeHtml(cand.id)}</code>
              </td>
              <td>${cand.tech}%</td>
              <td>${cand.skills}%</td>
              <td>${cand.acad}%</td>
              <td class="ranking-score">
                <span class="score-badge">${cand.compositeScore}%</span>
              </td>
              <td>
                <span class="badge ${idx === 0 ? 'badge-emerald' : idx === 1 ? 'badge-cyan' : 'badge-outline'}">
                  ${escapeHtml(cand.status)}
                </span>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  // Initial table render
  renderTable();

  // Preset button listeners
  presetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      presetButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      currentWeights = {
        tech: parseFloat(btn.getAttribute('data-w-tech') || '0.40'),
        skills: parseFloat(btn.getAttribute('data-w-skills') || '0.35'),
        acad: parseFloat(btn.getAttribute('data-w-acad') || '0.25')
      };

      renderTable();
    });
  });
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
