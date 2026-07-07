/* ============================================================
   search.js — Instant Search & Filter
   Searches topics, problems, difficulty, status, company tags
   ============================================================ */

const Search = (() => {

  // ── Problem Data ──────────────────────────────────────────
  const DATA = [
    // Arrays
    { topic: 'Arrays', name: 'Majority Element',            difficulty: 'easy',   status: 'complete',     companies: ['Google','Amazon','Adobe'] },
    { topic: 'Arrays', name: 'Find Missing & Repeated',     difficulty: 'easy',   status: 'complete',     companies: ['Amazon','Flipkart'] },
    { topic: 'Arrays', name: 'Merge Sorted Array',          difficulty: 'easy',   status: 'complete',     companies: ['Microsoft','Google'] },
    { topic: 'Arrays', name: 'Single Number',               difficulty: 'easy',   status: 'complete',     companies: ['Amazon','LeetCode'] },
    { topic: 'Arrays', name: 'Stock Buy & Sell',            difficulty: 'easy',   status: 'complete',     companies: ['Amazon','Goldman Sachs'] },
    { topic: 'Arrays', name: "Kadane's Algorithm",          difficulty: 'medium', status: 'complete',     companies: ['Amazon','Microsoft','Goldman Sachs'] },
    { topic: 'Arrays', name: 'Pow(x, n)',                   difficulty: 'medium', status: 'complete',     companies: ['Google','Facebook'] },
    { topic: 'Arrays', name: 'Container with Most Water',   difficulty: 'medium', status: 'complete',     companies: ['Amazon','Uber'] },
    { topic: 'Arrays', name: 'Sort Colors',                 difficulty: 'medium', status: 'complete',     companies: ['Microsoft','Adobe'] },
    { topic: 'Arrays', name: '3Sum',                        difficulty: 'medium', status: 'complete',     companies: ['Google','Amazon','Facebook'] },
    { topic: 'Arrays', name: '4Sum',                        difficulty: 'medium', status: 'complete',     companies: ['Google','Oracle'] },
    { topic: 'Arrays', name: 'Search 2D Matrix',            difficulty: 'medium', status: 'complete',     companies: ['Amazon','Microsoft'] },
    { topic: 'Arrays', name: 'Next Permutation',            difficulty: 'medium', status: 'complete',     companies: ['Google','Facebook'] },
    { topic: 'Arrays', name: 'Merge Intervals',             difficulty: 'medium', status: 'complete',     companies: ['Google','Uber'] },
    { topic: 'Arrays', name: 'Set Matrix Zeroes',           difficulty: 'medium', status: 'complete',     companies: ['Microsoft','Amazon'] },
    { topic: 'Arrays', name: 'Word Search',                 difficulty: 'medium', status: 'complete',     companies: ['Amazon','Microsoft'] },
    { topic: 'Arrays', name: 'Count Inversions',            difficulty: 'hard',   status: 'complete',     companies: ['Google','Goldman Sachs'] },
    { topic: 'Arrays', name: 'Trapping Rainwater',          difficulty: 'hard',   status: 'complete',     companies: ['Amazon','Google','Microsoft'] },
    { topic: 'Arrays', name: 'Sliding Window Maximum',      difficulty: 'hard',   status: 'complete',     companies: ['Amazon','Google'] },
    { topic: 'Arrays', name: 'Reverse Pairs',               difficulty: 'hard',   status: 'complete',     companies: ['Google','DE Shaw'] },
    // Binary Search
    { topic: 'Binary Search', name: 'Search Rotated Sorted Array', difficulty: 'medium', status: 'complete', companies: ['Amazon','Google','Microsoft'] },
    { topic: 'Binary Search', name: 'Peak Index Mountain Array',   difficulty: 'medium', status: 'complete', companies: ['Amazon','Google'] },
    { topic: 'Binary Search', name: 'Single Element Sorted Array', difficulty: 'medium', status: 'complete', companies: ['Google','Microsoft'] },
    { topic: 'Binary Search', name: 'Book Allocation',             difficulty: 'medium', status: 'complete', companies: ['Amazon','Flipkart'] },
    { topic: 'Binary Search', name: "Painter's Partition",         difficulty: 'medium', status: 'complete', companies: ['Google','Salesforce'] },
    { topic: 'Binary Search', name: 'Aggressive Cows',             difficulty: 'medium', status: 'complete', companies: ['Flipkart','Amazon'] },
    { topic: 'Binary Search', name: 'Median of 2 Sorted Arrays',   difficulty: 'hard',   status: 'complete', companies: ['Google','Amazon','Microsoft'] },
    // Strings
    { topic: 'Strings', name: 'Valid Palindrome',           difficulty: 'easy',   status: 'complete',     companies: ['Amazon','Microsoft'] },
    { topic: 'Strings', name: 'Longest Common Prefix',      difficulty: 'easy',   status: 'complete',     companies: ['Google','Amazon'] },
    { topic: 'Strings', name: 'Valid Anagram',              difficulty: 'easy',   status: 'complete',     companies: ['Google','Microsoft'] },
    { topic: 'Strings', name: 'Reverse Words in String',    difficulty: 'medium', status: 'complete',     companies: ['Amazon','Facebook'] },
    { topic: 'Strings', name: 'Remove All Occurrences',     difficulty: 'medium', status: 'complete',     companies: ['Adobe'] },
    { topic: 'Strings', name: 'Permutation in String',      difficulty: 'medium', status: 'complete',     companies: ['Amazon','Google'] },
    { topic: 'Strings', name: 'Minimum Window Substring',   difficulty: 'hard',   status: 'in-progress',  companies: ['Google','Amazon','Facebook'] },
    { topic: 'Strings', name: 'KMP Algorithm',              difficulty: 'hard',   status: 'in-progress',  companies: ['Microsoft','Google'] },
    { topic: 'Strings', name: 'Rabin-Karp Algorithm',       difficulty: 'hard',   status: 'in-progress',  companies: ['Google','Oracle'] },
    // Linked Lists
    { topic: 'Linked List', name: 'Reverse Linked List',    difficulty: 'easy',   status: 'complete',     companies: ['Amazon','Google'] },
    { topic: 'Linked List', name: 'Middle of Linked List',  difficulty: 'easy',   status: 'complete',     companies: ['Amazon','Adobe'] },
    { topic: 'Linked List', name: 'Merge 2 Sorted LL',      difficulty: 'easy',   status: 'complete',     companies: ['Amazon','Microsoft'] },
    { topic: 'Linked List', name: 'Check Palindrome',       difficulty: 'easy',   status: 'complete',     companies: ['Microsoft','Apple'] },
    { topic: 'Linked List', name: 'Detect Cycle',           difficulty: 'easy',   status: 'complete',     companies: ['Amazon','Google'] },
    { topic: 'Linked List', name: 'Flatten LL',             difficulty: 'medium', status: 'complete',     companies: ['Amazon','Flipkart'] },
    { topic: 'Linked List', name: 'Add 2 Numbers',          difficulty: 'medium', status: 'complete',     companies: ['Google','Amazon'] },
    { topic: 'Linked List', name: 'Clone LL',               difficulty: 'medium', status: 'complete',     companies: ['Amazon','Oracle'] },
    { topic: 'Linked List', name: 'LRU Cache',              difficulty: 'medium', status: 'complete',     companies: ['Amazon','Google','Microsoft'] },
    { topic: 'Linked List', name: 'Reverse LL II',          difficulty: 'medium', status: 'complete',     companies: ['Amazon','Microsoft'] },
    { topic: 'Linked List', name: 'Rotate LL',              difficulty: 'medium', status: 'complete',     companies: ['Google','Amazon'] },
    { topic: 'Linked List', name: 'Reverse Nodes in K Groups', difficulty: 'hard', status: 'complete',   companies: ['Google','Amazon','Microsoft'] },
    // Recursion & Backtracking
    { topic: 'Recursion & Backtracking', name: 'Combination Sum I', difficulty: 'medium', status: 'complete', companies: ['Amazon'] },
    { topic: 'Recursion & Backtracking', name: 'Combination Sum II', difficulty: 'medium', status: 'complete', companies: ['Google'] },
    { topic: 'Recursion & Backtracking', name: 'Palindrome Partitioning', difficulty: 'medium', status: 'complete', companies: ['Google','Amazon'] },
    { topic: 'Recursion & Backtracking', name: "Knight's Tour", difficulty: 'medium', status: 'complete', companies: ['Google'] },
    { topic: 'Recursion & Backtracking', name: 'M-Coloring', difficulty: 'medium', status: 'complete', companies: ['Amazon'] },
    { topic: 'Recursion & Backtracking', name: 'Rat in a Maze', difficulty: 'medium', status: 'complete', companies: ['Amazon','Microsoft'] },
    { topic: 'Recursion & Backtracking', name: 'N-Queens', difficulty: 'hard', status: 'complete', companies: ['Google','Amazon','Microsoft'] },
    { topic: 'Recursion & Backtracking', name: 'Sudoku Solver', difficulty: 'hard', status: 'complete', companies: ['Google','Microsoft'] },
    // Binary Trees
    { topic: 'Binary Trees', name: 'Inorder Traversal', difficulty: 'easy', status: 'complete', companies: ['Amazon','Microsoft'] },
    { topic: 'Binary Trees', name: 'Symmetric Tree', difficulty: 'easy', status: 'complete', companies: ['Microsoft','Google'] },
    { topic: 'Binary Trees', name: 'Diameter of Binary Tree', difficulty: 'easy', status: 'complete', companies: ['Google','Amazon','Facebook'] },
    { topic: 'Binary Trees', name: 'Level Order Traversal', difficulty: 'medium', status: 'complete', companies: ['Amazon','Microsoft'] },
    { topic: 'Binary Trees', name: 'BT from Inorder & Preorder', difficulty: 'medium', status: 'complete', companies: ['Google','Amazon'] },
    { topic: 'Binary Trees', name: 'Max Path Sum', difficulty: 'hard', status: 'complete', companies: ['Google','Amazon','Facebook'] },
    { topic: 'Binary Trees', name: 'Zig Zag Traversal', difficulty: 'medium', status: 'complete', companies: ['Amazon','Microsoft'] },
    // BST
    { topic: 'BST', name: 'Validate BST', difficulty: 'medium', status: 'complete', companies: ['Amazon','Google'] },
    { topic: 'BST', name: 'Kth Smallest in BST', difficulty: 'medium', status: 'complete', companies: ['Google','Amazon','Microsoft'] },
    { topic: 'BST', name: 'LCA in BST', difficulty: 'medium', status: 'complete', companies: ['Amazon','Facebook'] },
    { topic: 'BST', name: 'Largest BST in Binary Tree', difficulty: 'hard', status: 'complete', companies: ['Amazon'] },
    { topic: 'BST', name: 'Merge 2 BSTs', difficulty: 'hard', status: 'complete', companies: ['Google'] },
    // Stacks & Queues
    { topic: 'Stacks & Queues', name: 'Next Greater Element I', difficulty: 'easy', status: 'complete', companies: ['Amazon','Microsoft'] },
    { topic: 'Stacks & Queues', name: 'Min Stack', difficulty: 'medium', status: 'complete', companies: ['Amazon','Google','Microsoft'] },
    { topic: 'Stacks & Queues', name: 'Largest Rectangle Histogram', difficulty: 'hard', status: 'complete', companies: ['Google','Amazon','Microsoft'] },
    { topic: 'Stacks & Queues', name: 'Stock Span Problem', difficulty: 'medium', status: 'complete', companies: ['Goldman Sachs','Morgan Stanley'] },
    { topic: 'Stacks & Queues', name: 'Rotten Oranges', difficulty: 'medium', status: 'complete', companies: ['Amazon','Google'] },
    { topic: 'Stacks & Queues', name: 'Celebrity Problem', difficulty: 'medium', status: 'complete', companies: ['Amazon','Microsoft'] },
    // Graphs
    { topic: 'Graph', name: 'Flood Fill', difficulty: 'easy', status: 'complete', companies: ['Amazon','Google'] },
    { topic: 'Graph', name: 'Number of Islands (BFS)', difficulty: 'medium', status: 'complete', companies: ['Amazon','Google','Microsoft'] },
    { topic: 'Graph', name: 'Number of Islands (DFS)', difficulty: 'medium', status: 'complete', companies: ['Amazon','Google'] },
    { topic: 'Graph', name: 'Detect Cycle in 2D Grid', difficulty: 'medium', status: 'complete', companies: ['Microsoft'] },
    { topic: 'Graph', name: 'Redundant Connection', difficulty: 'medium', status: 'complete', companies: ['Google','Amazon'] },
    // Heaps
    { topic: 'Heap', name: 'Top K Frequent Elements', difficulty: 'medium', status: 'complete', companies: ['Amazon','Google','Facebook'] },
    { topic: 'Heap', name: 'Heap Sort', difficulty: 'medium', status: 'complete', companies: ['Microsoft','Amazon'] },
    { topic: 'Heap', name: 'Kth Smallest Element', difficulty: 'medium', status: 'complete', companies: ['Amazon','Google'] },
    { topic: 'Heap', name: 'Smallest Range in K Sorted Lists', difficulty: 'hard', status: 'complete', companies: ['Google','Amazon'] },
    // Tries
    { topic: 'Trie', name: 'Implement Trie', difficulty: 'medium', status: 'complete', companies: ['Amazon','Google','Microsoft'] },
    { topic: 'Trie', name: 'Word Break', difficulty: 'medium', status: 'complete', companies: ['Amazon','Google'] },
    { topic: 'Trie', name: 'Design Phone Directory', difficulty: 'medium', status: 'complete', companies: ['Amazon'] },
    { topic: 'Trie', name: 'Longest String with All Prefix', difficulty: 'medium', status: 'complete', companies: ['Google'] },
    { topic: 'Trie', name: 'Longest Common Prefix (Trie)', difficulty: 'easy', status: 'complete', companies: ['Google','Amazon'] },
    // DP (not started)
    { topic: 'Dynamic Programming', name: '0/1 Knapsack', difficulty: 'medium', status: 'not-started', companies: ['Amazon','Google'] },
    { topic: 'Dynamic Programming', name: 'Coin Change', difficulty: 'medium', status: 'not-started', companies: ['Amazon','Google','Facebook'] },
    { topic: 'Dynamic Programming', name: 'Longest Common Subsequence', difficulty: 'medium', status: 'not-started', companies: ['Google','Microsoft'] },
    { topic: 'Dynamic Programming', name: 'Longest Increasing Subsequence', difficulty: 'medium', status: 'not-started', companies: ['Amazon','Microsoft'] },
    // Greedy
    { topic: 'Greedy', name: 'Activity Selection', difficulty: 'easy', status: 'not-started', companies: ['Amazon'] },
    { topic: 'Greedy', name: 'Job Sequencing', difficulty: 'medium', status: 'not-started', companies: ['Microsoft','Amazon'] },
  ];

  let currentFilter = 'all';
  let currentQuery  = '';
  let resultsEl     = null;
  let inputEl       = null;
  let clearBtn      = null;

  function normalize(str) {
    return str.toLowerCase().trim();
  }

  function matches(item, q) {
    const n = normalize;
    return (
      n(item.name).includes(q)       ||
      n(item.topic).includes(q)      ||
      n(item.difficulty).includes(q) ||
      n(item.status).includes(q)     ||
      item.companies.some(c => n(c).includes(q))
    );
  }

  function filter() {
    const q = normalize(currentQuery);
    return DATA.filter(item => {
      const diffMatch = currentFilter === 'all' || item.difficulty === currentFilter ||
                        item.status === currentFilter;
      return diffMatch && (!q || matches(item, q));
    });
  }

  function statusBadge(status) {
    const map = {
      'complete':    '<span class="badge badge--complete">✓ Complete</span>',
      'in-progress': '<span class="badge badge--in-progress">⚡ In Progress</span>',
      'not-started': '<span class="badge badge--not-started">⏳ Planned</span>'
    };
    return map[status] || '';
  }

  function diffBadge(diff) {
    const map = {
      'easy':   '<span class="badge badge--easy">Easy</span>',
      'medium': '<span class="badge badge--medium">Medium</span>',
      'hard':   '<span class="badge badge--hard">Hard</span>'
    };
    return map[diff] || '';
  }

  function render(items) {
    if (!resultsEl) return;

    if (!items.length) {
      resultsEl.innerHTML = `
        <div class="search-no-results">
          <div style="font-size:2rem;margin-bottom:0.5rem">🔍</div>
          <p>No results for "<strong>${currentQuery}</strong>"</p>
          <p style="font-size:0.85rem;margin-top:0.25rem;color:var(--color-muted)">Try a different topic, difficulty, or company name</p>
        </div>`;
      return;
    }

    resultsEl.innerHTML = items.slice(0, 60).map(item => `
      <div class="search-result-item reveal">
        <div class="search-result-item__topic">${item.topic}</div>
        <div class="search-result-item__name">${item.name}</div>
        <div class="search-result-item__meta">
          ${diffBadge(item.difficulty)}
          ${statusBadge(item.status)}
        </div>
      </div>`).join('');

    // Trigger reveal for newly added items
    requestAnimationFrame(() => {
      resultsEl.querySelectorAll('.reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('revealed'), i * 30);
      });
    });
  }

  function update() {
    render(filter());
    if (clearBtn) {
      clearBtn.classList.toggle('visible', currentQuery.length > 0);
    }
  }

  function init() {
    inputEl   = document.getElementById('search-input');
    resultsEl = document.getElementById('search-results');
    clearBtn  = document.getElementById('search-clear');

    if (!inputEl || !resultsEl) return;

    // Show all results initially
    update();

    inputEl.addEventListener('input', e => {
      currentQuery = e.target.value;
      update();
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        currentQuery = '';
        inputEl.value = '';
        inputEl.focus();
        update();
      });
    }

    // Filter buttons
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        update();
      });
    });
  }

  return { init, getData: () => DATA };
})();

export default Search;
