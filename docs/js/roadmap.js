/* ============================================================
   roadmap.js — Interactive Expandable Roadmap
   ============================================================ */

const Roadmap = (() => {

  const STEPS = [
    {
      id:       'foundation',
      title:    'Foundation',
      icon:     '🏗️',
      status:   'complete',
      solved:   '5/5',
      hours:    '~20 hrs',
      desc:     'Core array manipulation, time complexity basics, and mathematical foundations.',
      topics:   ['Arrays (Easy)', 'Basic Math', 'STL Basics', 'Time Complexity'],
      problems: '5 problems · All Complete ✓'
    },
    {
      id:       'arrays-search',
      title:    'Arrays & Binary Search',
      icon:     '🔍',
      status:   'complete',
      solved:   '27/32',
      hours:    '~40 hrs',
      desc:     'Two-pointer patterns, sliding window, divide & conquer, binary search on answers.',
      topics:   ['Arrays (Medium)', 'Arrays (Hard)', 'Binary Search (Medium)', 'Binary Search (Hard)'],
      problems: '27 problems · 5 remaining'
    },
    {
      id:       'strings-ll',
      title:    'Strings & Linked Lists',
      icon:     '🔗',
      status:   'complete',
      solved:   '19/24',
      hours:    '~45 hrs',
      desc:     'String manipulation, KMP/Rabin-Karp, pointer tricks, list reversal, cycle detection.',
      topics:   ['Strings (Easy)', 'Strings (Medium)', 'Strings (Hard)', 'Linked List'],
      problems: '19 problems · 5 remaining'
    },
    {
      id:       'recursion-trees',
      title:    'Recursion & Trees',
      icon:     '🌳',
      status:   'complete',
      solved:   '43/50',
      hours:    '~60 hrs',
      desc:     'Divide & conquer recursion, backtracking, tree traversals, BST operations.',
      topics:   ['Recursion & Backtracking', 'Binary Trees', 'BST'],
      problems: '43 problems · 7 remaining'
    },
    {
      id:       'stacks-heaps',
      title:    'Stacks, Queues & Heaps',
      icon:     '📚',
      status:   'complete',
      solved:   '20/22',
      hours:    '~35 hrs',
      desc:     'Monotonic stack patterns, BFS with queues, priority queue, heap operations.',
      topics:   ['Stacks & Queues (Easy)', 'Stacks & Queues (Medium)', 'Stacks & Queues (Hard)', 'Heap'],
      problems: '20 problems · 2 remaining'
    },
    {
      id:       'tries',
      title:    'Tries',
      icon:     '🔤',
      status:   'complete',
      solved:   '5/5',
      hours:    '~15 hrs',
      desc:     'Prefix trees, auto-complete, word break, phone directory design.',
      topics:   ['Trie (Easy)', 'Trie (Medium)'],
      problems: '5 problems · All Complete ✓'
    },
    {
      id:       'graphs',
      title:    'Graphs',
      icon:     '🕸️',
      status:   'active',
      solved:   '5/26',
      hours:    '~70 hrs',
      desc:     'BFS, DFS, cycle detection, topological sort, shortest paths, MST, Union-Find.',
      topics:   ['Graph BFS', 'Graph DFS', 'Topological Sort', 'Shortest Path', 'MST', 'Union Find'],
      problems: '5 problems complete · 21 remaining'
    },
    {
      id:       'dp-greedy',
      title:    'Dynamic Programming & Greedy',
      icon:     '⚡',
      status:   'not-started',
      solved:   '0/27',
      hours:    '~80 hrs',
      desc:     'Memoization, tabulation, greedy proofs, knapsack, LCS, LIS, interval scheduling.',
      topics:   ['DP (1D)', 'DP (2D)', 'DP (Strings)', 'DP (Trees)', 'Greedy'],
      problems: '27 problems · Not yet started'
    },
    {
      id:       'interview-prep',
      title:    'Advanced Interview Prep',
      icon:     '🚀',
      status:   'not-started',
      solved:   '0/—',
      hours:    '~60 hrs',
      desc:     'Mixed topic problems, system design patterns, mock interviews, company-specific prep.',
      topics:   ['Mixed Patterns', 'System Design', 'FAANG Mock Interviews', 'Behavioural'],
      problems: 'Continuous practice'
    }
  ];

  function statusClass(s) {
    if (s === 'complete')     return 'complete';
    if (s === 'active')       return 'active';
    if (s === 'not-started')  return 'not-started';
    return '';
  }

  function render(container) {
    if (!container) return;

    container.innerHTML = STEPS.map((step, i) => `
      <div class="roadmap-step ${statusClass(step.status)} reveal stagger-${(i % 6) + 1}">
        <div class="roadmap-step__node" title="${step.status}">${step.icon}</div>
        <div class="roadmap-step__card" data-roadmap-id="${step.id}">
          <div class="roadmap-step__header">
            <div>
              <div class="roadmap-step__title">${step.title}</div>
              <div style="font-size:var(--text-xs);color:var(--color-muted);font-family:var(--font-mono);margin-top:4px">
                ${step.problems}
              </div>
            </div>
            <div class="roadmap-step__meta">
              ${step.status === 'complete' ? '<span class="badge badge--complete">Complete</span>' :
                step.status === 'active'   ? '<span class="badge badge--in-progress">Active</span>' :
                                              '<span class="badge badge--not-started">Planned</span>'}
              <span style="font-size:var(--text-xs);font-family:var(--font-mono);color:var(--color-muted)">${step.hours}</span>
              <svg class="roadmap-step__chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
          <div class="roadmap-detail" id="detail-${step.id}">
            <div class="roadmap-detail__content">
              <p style="font-size:var(--text-sm);color:var(--color-muted);line-height:1.65">${step.desc}</p>
              <div class="roadmap-detail__topics">
                ${step.topics.map(t => `<span class="chip">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>`).join('');

    // Attach toggle listeners
    container.querySelectorAll('[data-roadmap-id]').forEach(card => {
      card.addEventListener('click', () => {
        const id     = card.dataset.roadmapId;
        const detail = document.getElementById(`detail-${id}`);
        const isOpen = detail.classList.contains('open');

        // Close all others
        container.querySelectorAll('.roadmap-detail').forEach(d => {
          d.classList.remove('open');
          d.closest('.roadmap-step__card')?.classList.remove('open');
        });

        if (!isOpen) {
          detail.classList.add('open');
          card.classList.add('open');
        }
      });
    });
  }

  function init() {
    const container = document.getElementById('roadmap-container');
    render(container);
  }

  return { init };
})();

export default Roadmap;
