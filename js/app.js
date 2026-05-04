let CERTS = [];
let sortCol = 'duration_hrs';
let sortDir = 'asc';
let filterLevel = 'all';
let filterTopic = 'all';
let searchQuery = '';

function initializeStats() {
    if (!CERTS || CERTS.length === 0) return;
    
    const heroText = document.getElementById('hero-total-text');
    if (heroText) heroText.textContent = CERTS.length + ' Free';

    document.getElementById('stat-total').textContent = CERTS.length;
    document.getElementById('stat-beginner').textContent = CERTS.filter(c => c.level === 'Beginner').length;
    
    const shortest = Math.min(...CERTS.map(c => c.duration_hrs));
    document.getElementById('stat-shortest').textContent = shortest + ' hrs';
    
    const uniqueIssuers = new Set(CERTS.map(c => c.issuer)).size;
    document.getElementById('stat-issuers').textContent = uniqueIssuers;
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    const noResults = document.getElementById('noResults');

    // Filter
    let data = CERTS.filter(cert => {
        const matchLevel = filterLevel === 'all' || cert.level === filterLevel;
        const matchTopic = filterTopic === 'all' || cert.topic === filterTopic;
        const q = searchQuery.toLowerCase();
        const matchSearch = !q ||
            cert.name.toLowerCase().includes(q) ||
            cert.issuer.toLowerCase().includes(q) ||
            cert.topic.toLowerCase().includes(q) ||
            cert.description.toLowerCase().includes(q);
        return matchLevel && matchTopic && matchSearch;
    });

    // Sort
    data.sort((a, b) => {
        let va = a[sortCol], vb = b[sortCol];
        if (typeof va === 'string') va = va.toLowerCase();
        if (typeof vb === 'string') vb = vb.toLowerCase();
        if (va < vb) return sortDir === 'asc' ? -1 : 1;
        if (va > vb) return sortDir === 'asc' ? 1 : -1;
        return 0;
    });

    // Update count
    document.getElementById('visibleCount').textContent = data.length;

    if (data.length === 0) {
        tbody.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    noResults.style.display = 'none';

    tbody.innerHTML = data.map(cert => `
        <tr>
            <td>
                <span class="cert-name">${cert.name}</span>
                <span class="cert-topic-inline">${cert.description}</span>
            </td>
            <td>
                <div class="issuer-wrap">
                    <span class="issuer-dot" style="background:${cert.issuer_color}"></span>
                    <span class="issuer-name">${cert.issuer}</span>
                </div>
            </td>
            <td>
                <span class="duration-val">${cert.duration}</span>
            </td>
            <td>
                <span class="badge badge-${cert.level.toLowerCase()}">${cert.level === 'Beginner' ? '🔰' : '⚡'} ${cert.level}</span>
            </td>
            <td>
                <span class="topic-tag">${cert.topic}</span>
            </td>
            <td>
                ${cert.cert_type === 'free'
            ? `<span class="cert-free"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>${cert.cert_label}</span>`
            : `<span class="cert-audit"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>${cert.cert_label}</span>`
            }
            </td>
            <td>
                <div class="actions-cell">
                    <a class="btn-enroll" href="${cert.url}" target="_blank" rel="noopener" aria-label="Enroll in ${cert.name}">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Enroll
                    </a>
                    <a class="btn-linkedin" href="${cert.linkedin_url}" target="_blank" rel="noopener" title="Share on LinkedIn" aria-label="LinkedIn page for ${cert.name}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                </div>
            </td>
        </tr>
    `).join('');
}

function setupListeners() {
    // Sort
    document.querySelectorAll('th.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const col = th.dataset.col;
            if (sortCol === col) {
                sortDir = sortDir === 'asc' ? 'desc' : 'asc';
            } else {
                sortCol = col;
                sortDir = 'asc';
            }
            document.querySelectorAll('th.sortable').forEach(t => t.classList.remove('sort-asc', 'sort-desc'));
            th.classList.add(sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
            renderTable();
        });
    });

    document.querySelector('[data-col="duration_hrs"]').classList.add('sort-asc');

    // Level Filters
    document.querySelectorAll('[data-filter-level]').forEach(btn => {
        btn.addEventListener('click', () => {
            filterLevel = btn.dataset.filterLevel;
            document.querySelectorAll('[data-filter-level]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTable();
        });
    });

    // Topic Filters
    document.querySelectorAll('[data-filter-topic]').forEach(btn => {
        btn.addEventListener('click', () => {
            filterTopic = btn.dataset.filterTopic;
            document.querySelectorAll('[data-filter-topic]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTable();
        });
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', e => {
        searchQuery = e.target.value;
        renderTable();
    });

    // Theme Toggle
    const toggle = document.querySelector('[data-theme-toggle]');
    const root = document.documentElement;
    let theme = 'dark';
    root.setAttribute('data-theme', theme);

    function setIcon(t) {
        toggle.innerHTML = t === 'dark'
            ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
            : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
        toggle.setAttribute('aria-label', `Switch to ${t === 'dark' ? 'light' : 'dark'} mode`);
    }

    toggle.addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', theme);
        setIcon(theme);
    });

    setIcon(theme);
}

// ── Initial Render ────────────────────────────────────────
async function init() {
    try {
        const response = await fetch('data/certificates.json');
        CERTS = await response.json();
        
        initializeStats();
        setupListeners();
        renderTable();
    } catch (error) {
        console.error("Failed to load certificates:", error);
    }
}

document.addEventListener('DOMContentLoaded', init);
