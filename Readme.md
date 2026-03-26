# DSA for Placements

A comprehensive collection of Data Structures and Algorithms solutions curated for interview preparation and competitive programming. This repository contains implementations of classic DSA problems organized by topic and difficulty level, aligned with the Apna College DSA series.

## 📚 Topics Covered

### Core Data Structures
- **Arrays** (25 problems) - Easy, Medium, Hard
- **Linked Lists** (7 problems) - Easy, Medium
- **Binary Trees** (24 problems)
- **Binary Search Trees** (15 problems)
- **Stacks & Queues** (15 problems)
- **Tries** (5 problems)
- **Heaps** (6 problems)
- **Graphs** (26 problems)

### Algorithms
- **Binary Search** (7 problems) - Medium, Hard
- **Recursion & Backtracking** (11 problems) - Medium, Hard
- **Dynamic Programming** (21 problems) - Medium, Hard
- **Greedy** (6 problems) - Easy, Medium, Hard
- **Strings** (11 problems) - Easy, Medium, Hard

## 📂 Directory Structure

```
Apna College DSA/
├── Arrays/
│   ├── Easy/          (5 problems)
│   ├── Medium/        (11 problems)
│   └── Hard/          (4 problems)
├── Binary Search/
│   ├── Medium/        (6 problems)
│   └── Hard/          (1 problem)
├── Binary Trees/
├── BST/
├── DP/
├── Graph/
├── Greedy/
├── Linked List/
│   ├── Easy/          (5 problems)
│   ├── Medium/        (1 problem)
│   └── Hard/
├── Recursion_And_Backtracing/
│   ├── Medium/        (8 problems)
│   └── Hard/          (3 problems)
├── Stack_And_Queue/
├── Strings/
│   ├── Easy/          (3 problems)
│   ├── Medium/        (3 problems)
│   └── Hard/          (1 problem)
├── Trie/
├── DSA for PLACEMENTS.csv
├── DSA for PLACEMENTS.xlsx
└── README.md
```

## 🎯 Problem Categories

### Arrays (25 Problems)
**Easy:** Majority Element, Repeat & Missing Number, Merge Sorted Arrays, Single Number, Stock Buy & Sell

**Medium:** Kadane's Algorithm, Pow(x,n), Container with Most Water, Sort Colors, 3Sum, 4Sum, Search 2D Matrix, Next Permutation, Merge Intervals, Set Matrix Zeroes, Word Search, Product of Array Except Self, Subarray Sum Equals K, Find Duplicate

**Hard:** Count Inversions, Trapping Rainwater, Sliding Window Maximum, Reverse Pairs, Largest Rectangle in Histogram

### Binary Search (7 Problems)
**Medium:** Search in Rotated Sorted Array, Peak Index in Mountain Array, Single Element in Sorted Array, Book Allocation, Painter's Partition, Aggressive Cows

**Hard:** Median of 2 Sorted Arrays

### Strings (11 Problems)
**Easy:** Valid Palindrome, Longest Common Prefix, Valid Anagram

**Medium:** Reverse Words in String, Remove All Occurrences, Permutation in String, String Compression, Group Anagrams

**Hard:** Minimum Window Substring, KMP Algorithm, Rabin-Karp Algorithm

### Linked Lists (7 Problems)
**Easy:** Reverse LL, Middle of LL, Merge 2 Sorted LL, Check Palindrome, Detect Cycle

**Medium:** Remove Cycle, Flatten LL

### Recursion & Backtracking (11 Problems)
**Medium:** Combination Sum I & II, Palindrome Partitioning, Knight's Tour, M-Coloring, Rat in Maze, Subsets II, Merge Sort

**Hard:** N-Queens, Sudoku Solver, Count Inversions

### Binary Trees (24 Problems)
Traversals (Inorder, Preorder, Postorder), Symmetric Tree, Diameter, Height Balanced, LCA, Top/Bottom View, Level Order, Flatten to LL, Max Path Sum, and more

### BST (15 Problems)
Kth Largest/Smallest, Validate BST, LCA, Inorder Successor/Predecessor, Serialize & Deserialize, and more

### Graphs (26 Problems)
BFS, DFS, Cycle Detection, Topological Sort, MST (Prim's, Kruskal's), Dijkstra's, Floyd-Warshall, Strongly Connected Components, Bipartite Check, Number of Islands, and more

### Dynamic Programming (21 Problems)
0-1 Knapsack, Coin Change, LCS, Edit Distance, LIS, MCM, Egg Dropping, Rod Cutting, and more

### Greedy (6 Problems)
Assign Cookies, Indian Coins, Fractional Knapsack, Activity Selection, Job Scheduling

## 🛠️ Tech Stack

- **Language:** C++
- **Standard Library:** STL (Vector, Map, Queue, Stack, etc.)
- **Compilation:** g++ or any C++11+ compiler

## 🚀 Getting Started

### Prerequisites
- C++ compiler (g++, clang, or MSVC)
- Basic understanding of DSA concepts

### Compilation & Execution

```bash
# Navigate to the problem directory
cd Arrays/Easy

# Compile
g++ -o solution BuyAndSellStock.cpp

# Run
./solution
```

## 📊 Placement Statistics

This collection is based on the **DSA for Placements** curriculum, tracking problems asked by top companies including:

- **FAANG:** Amazon, Google, Meta, Microsoft, Apple
- **Finance:** Goldman Sachs, Morgan Stanley, Citadel, DE Shaw
- **Tech Giants:** Adobe, Oracle, Uber, Salesforce, Flipkart
- **Startups:** Swiggy, Ola, Paytm, Zepto, PhonePe

Each problem is tagged with:
- Difficulty level (Easy, Medium, Hard)
- Companies that have asked it
- Prerequisites and related concepts
- Video solutions (where available)

## 📈 Learning Path

### Beginner
1. Arrays (Easy)
2. Strings (Easy)
3. Linked Lists (Easy)
4. Recursion basics

### Intermediate
1. Binary Search
2. Sorting & Hashing
3. Recursion & Backtracking
4. Stacks & Queues
5. Trees (Binary Trees, BST)

### Advanced
1. Graphs (BFS, DFS, Shortest Path)
2. Dynamic Programming
3. Greedy Algorithms
4. Advanced Tree Problems
5. System Design Concepts

## 📝 File Format

Each solution file contains:
- Problem implementation with optimized approach
- Time and space complexity analysis
- Test cases in main function
- Comments explaining key logic

Example:
```cpp
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int solve(vector<int>& arr) {
        // Solution implementation
    }
};

int main() {
    vector<int> test = {/* test data */};
    Solution s;
    cout << s.solve(test) << endl;
    return 0;
}
```

## 📊 Progress Tracking

Use the provided Excel/CSV files to track your progress:
- **DSA for PLACEMENTS.xlsx** - Interactive progress tracker
- **DSA for PLACEMENTS.csv** - Problem list with company tags and difficulty

## 🎓 Resources

- **Video Series:** Apna College DSA Series by Shradha Ma'am
- **Practice Platform:** LeetCode, GeeksforGeeks, CodeChef
- **Interview Prep:** Focus on Medium and Hard problems from top companies

## 💡 Tips for Success

1. **Understand before coding** - Grasp the concept first
2. **Optimize step by step** - Start with brute force, then optimize
3. **Practice consistently** - Solve 2-3 problems daily
4. **Review solutions** - Learn from different approaches
5. **Track progress** - Mark completed problems in the CSV
6. **Focus on patterns** - Recognize similar problem types
7. **Mock interviews** - Practice explaining solutions verbally

## 📄 License

This repository is for educational purposes. Problems are sourced from LeetCode, GeeksforGeeks, and other competitive programming platforms.

## 🤝 Contributing

Feel free to:
- Add optimized solutions
- Improve existing implementations
- Add more test cases
- Fix bugs or improve documentation

## 📞 Support

For questions or clarifications:
- Refer to the Apna College DSA series
- Check LeetCode discussions
- Review GeeksforGeeks articles

---

**Last Updated:** 2024
**Total Problems:** 150+
**Topics:** 15+
**Difficulty Levels:** Easy, Medium, Hard

Happy Coding! 🚀
