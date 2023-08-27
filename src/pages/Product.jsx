import React, { useState } from "react";
import '../css/Product.css';

const categories = [
  {
    name: "Array",
    problems: [
      {
        id: 1,
        title: "Two Sum",
        leetcodeLink: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: 2,
        title: "Best Time to Buy and Sell Stock",
        leetcodeLink:
          "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        id: 3,
        title: "Contains Duplicate",
        leetcodeLink: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        id: 4,
        title: "Product of Array Except Self",
        leetcodeLink:
          "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        id: 5,
        title: "Maximum Subarray",
        leetcodeLink: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        id: 6,
        title: "Maximum Product Subarray",
        leetcodeLink: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      {
        id: 7,
        title: "Find Minimum in Rotated Sorted Array",
        leetcodeLink:
          "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        id: 8,
        title: "Search in Rotated Sorted Array",
        leetcodeLink:
          "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        id: 9,
        title: "3Sum",
        leetcodeLink: "https://leetcode.com/problems/3sum/",
      },
      {
        id: 10,
        title: "Container With Most Water",
        leetcodeLink:
          "https://leetcode.com/problems/container-with-most-water/",
      },
      // ... other problems ...
    ],
  },
  {
    name: "Binary",
    problems: [
      {
        id: 11,
        title: "Sum of Two Integers",
        leetcodeLink: "https://leetcode.com/problems/sum-of-two-integers/",
      },
      {
        id: 12,
        title: "Number of 1 Bits",
        leetcodeLink: "https://leetcode.com/problems/number-of-1-bits/",
      },
      {
        id: 13,
        title: "Counting Bits",
        leetcodeLink: "https://leetcode.com/problems/counting-bits/",
      },
      {
        id: 14,
        title: "Missing Number",
        leetcodeLink: "https://leetcode.com/problems/missing-number/",
      },
      {
        id: 15,
        title: "Reverse Bits",
        leetcodeLink: "https://leetcode.com/problems/reverse-bits/",
      },
      // ... other problems ...
    ],
  },
  {
    name: "Dynamic Programming",
    problems: [
      {
        id: 16,
        title: "Climbing Stairs",
        leetcodeLink: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        id: 17,
        title: "Coin Change",
        leetcodeLink: "https://leetcode.com/problems/coin-change/",
      },
      {
        id: 18,
        title: "Longest Increasing Subsequence",
        leetcodeLink:
          "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        id: 19,
        title: "Longest Common Subsequence",
        leetcodeLink:
          "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        id: 20,
        title: "Word Break Problem",
        leetcodeLink: "https://leetcode.com/problems/word-break/",
      },
      {
        id: 21,
        title: "Combination Sum",
        leetcodeLink: "https://leetcode.com/problems/combination-sum-iv/",
      },
      {
        id: 22,
        title: "House Robber",
        leetcodeLink: "https://leetcode.com/problems/house-robber/",
      },
      {
        id: 23,
        title: "House Robber II",
        leetcodeLink: "https://leetcode.com/problems/house-robber-ii/",
      },
      {
        id: 24,
        title: "Decode Ways",
        leetcodeLink: "https://leetcode.com/problems/decode-ways/",
      },
      {
        id: 25,
        title: "Unique Paths",
        leetcodeLink: "https://leetcode.com/problems/unique-paths/",
      },
      {
        id: 26,
        title: "Jump Game",
        leetcodeLink: "https://leetcode.com/problems/jump-game/",
      },
      // ... other problems ...
    ],
  },
  {
    name: "Graph",
    problems: [
      {
        id: 27,
        title: "Clone Graph",
        leetcodeLink: "https://leetcode.com/problems/clone-graph/",
      },
      {
        id: 28,
        title: "Course Schedule",
        leetcodeLink: "https://leetcode.com/problems/course-schedule/",
      },
      {
        id: 29,
        title: "Pacific Atlantic Water Flow",
        leetcodeLink:
          "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
      {
        id: 30,
        title: "Number of Islands",
        leetcodeLink: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        id: 31,
        title: "Longest Consecutive Sequence",
        leetcodeLink:
          "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
      {
        id: 32,
        title: "Alien Dictionary (Leetcode Premium)",
        leetcodeLink: "https://leetcode.com/problems/alien-dictionary/",
      },
      {
        id: 33,
        title: "Graph Valid Tree (Leetcode Premium)",
        leetcodeLink: "https://leetcode.com/problems/graph-valid-tree/",
      },
      {
        id: 34,
        title:
          "Number of Connected Components in an Undirected Graph (Leetcode Premium)",
        leetcodeLink:
          "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      },
    ],
  },
  {
    name: "Linked List",
    problems: [
      {
        id: 35,
        title: "Reverse a Linked List",
        leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        id: 36,
        title: "Detect Cycle in a Linked List",
        leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        id: 37,
        title: "Merge Two Sorted Lists",
        leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        id: 38,
        title: "Merge K Sorted Lists",
        leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        id: 39,
        title: "Remove Nth Node From End Of List",
        leetcodeLink:
          "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        id: 40,
        title: "Reorder List",
        leetcodeLink: "https://leetcode.com/problems/reorder-list/",
      },
    ],
  },
  {
    name: "Matrix",
    problems: [
      {
        id: 41,
        title: "Set Matrix Zeroes",
        leetcodeLink: "https://leetcode.com/problems/set-matrix-zeroes/",
      },
      {
        id: 42,
        title: "Spiral Matrix",
        leetcodeLink: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        id: 43,
        title: "Rotate Image",
        leetcodeLink: "https://leetcode.com/problems/rotate-image/",
      },
      {
        id: 44,
        title: "Word Search",
        leetcodeLink: "https://leetcode.com/problems/word-search/",
      },
    ],
  },
  {
    name: "Interval",
    problems: [
      {
        id: 45,
        title: "Insert Interval",
        leetcodeLink: "https://leetcode.com/problems/insert-interval/",
      },
      {
        id: 46,
        title: "Merge Intervals",
        leetcodeLink: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        id: 47,
        title: "Non-overlapping Intervals",
        leetcodeLink:
          "https://leetcode.com/problems/non-overlapping-intervals/",
      },
      {
        id: 48,
        title: "Meeting Rooms (Leetcode Premium)",
        leetcodeLink: "https://leetcode.com/problems/meeting-rooms/",
      },
      {
        id: 49,
        title: "Meeting Rooms II (Leetcode Premium)",
        leetcodeLink: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
    ],
  },
  {
    name: "String",
    problems: [
      {
        id: 50,
        title: "Longest Substring Without Repeating Characters",
        leetcodeLink:
          "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        id: 51,
        title: "Longest Repeating Character Replacement",
        leetcodeLink:
          "https://leetcode.com/problems/longest-repeating-character-replacement/",
      },
      {
        id: 52,
        title: "Minimum Window Substring",
        leetcodeLink: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        id: 53,
        title: "Valid Anagram",
        leetcodeLink: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        id: 54,
        title: "Group Anagrams",
        leetcodeLink: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        id: 55,
        title: "Valid Parentheses",
        leetcodeLink: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        id: 56,
        title: "Valid Palindrome",
        leetcodeLink: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        id: 57,
        title: "Longest Palindromic Substring",
        leetcodeLink:
          "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        id: 58,
        title: "Palindromic Substrings",
        leetcodeLink: "https://leetcode.com/problems/palindromic-substrings/",
      },
      {
        id: 59,
        title: "Encode and Decode Strings (Leetcode Premium)",
        leetcodeLink:
          "https://leetcode.com/problems/encode-and-decode-strings/",
      },
    ],
  },
  {
    name: "Tree",
    problems: [
      {
        id: 60,
        title: "Maximum Depth of Binary Tree",
        leetcodeLink:
          "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        id: 61,
        title: "Same Tree",
        leetcodeLink: "https://leetcode.com/problems/same-tree/",
      },
      {
        id: 62,
        title: "Invert/Flip Binary Tree",
        leetcodeLink: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        id: 63,
        title: "Binary Tree Maximum Path Sum",
        leetcodeLink:
          "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        id: 64,
        title: "Binary Tree Level Order Traversal",
        leetcodeLink:
          "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        id: 65,
        title: "Serialize and Deserialize Binary Tree",
        leetcodeLink:
          "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      },
      {
        id: 66,
        title: "Subtree of Another Tree",
        leetcodeLink: "https://leetcode.com/problems/subtree-of-another-tree/",
      },
      {
        id: 67,
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        leetcodeLink:
          "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        id: 68,
        title: "Validate Binary Search Tree",
        leetcodeLink:
          "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        id: 69,
        title: "Kth Smallest Element in a BST",
        leetcodeLink:
          "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
      {
        id: 70,
        title: "Lowest Common Ancestor of BST",
        leetcodeLink:
          "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        id: 71,
        title: "Implement Trie (Prefix Tree)",
        leetcodeLink:
          "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        id: 72,
        title: "Add and Search Word",
        leetcodeLink:
          "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      },
      {
        id: 73,
        title: "Word Search II",
        leetcodeLink: "https://leetcode.com/problems/word-search-ii/",
      },
    ],
  },
  {
    name: "Heap",
    problems: [
      {
        id: 74,
        title: "Merge K Sorted Lists",
        leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        id: 75,
        title: "Top K Frequent Elements",
        leetcodeLink: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        id: 76,
        title: "Find Median from Data Stream",
        leetcodeLink:
          "https://leetcode.com/problems/find-median-from-data-stream/",
      },
    ],
  },
  // ... other categories ...
];

// function ProblemList({ problems }) {
//   return (
//     <ul>
//       {problems.map((problem) => (
//         <li key={problem.id}>
//           <a
//             className="list"
//             href={problem.leetcodeLink}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {problem.title}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default function Product() {
//   const [activeCategory, setActiveCategory] = useState(null);

//   const toggleCategory = (categoryName) => {
//     setActiveCategory(activeCategory === categoryName ? null : categoryName);
//   };

//   return (
//     <div>
//       <h1 className="products"> Blind 75</h1>
//       <h3>List of Google's Blind 75 Problems!!</h3>
//       <div className="menu">
//         {categories.map((category) => (
//           <div
//             key={category.name}
//             className={`toggle ${
//               activeCategory === category.name ? "expanded" : ""
//             }`}
//             onClick={() => toggleCategory(category.name)}
//           >
//             {category.name}
//             {activeCategory === category.name && (
//               <div className={`lists expanded`}>
//                 <ProblemList problems={category.problems} />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

function ProblemList({ problems, onProblemToggle }) {
  return (
    <ul>
      {problems.map((problem) => (
        <li key={problem.id}>
          <label className="problem">
            <input
              type="checkbox"
              checked={problem.checked}
              onChange={() => onProblemToggle(problem.id)}
            />
            <a
              className={`list ${problem.checked ? 'checked' : ''}`}
              href={problem.leetcodeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {problem.title}
            </a>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default function Product() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categoriesState, setCategoriesState] = useState(categories);

  const toggleCategory = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  const toggleProblem = (problemId) => {
    const updatedCategories = categoriesState.map((category) => {
      const updatedProblems = category.problems.map((problem) => {
        if (problem.id === problemId) {
          return { ...problem, checked: !problem.checked };
        }
        return problem;
      });
      return { ...category, problems: updatedProblems };
    });
    setCategoriesState(updatedCategories);
  };

  const getCategoryProgress = (category) => {
    const totalProblems = category.problems.length;
    const solvedProblems = category.problems.filter((problem) => problem.checked).length;
    return (solvedProblems / totalProblems) * 100 || 0;
  };

  return (
    <div>
      <h1 className="products"> Blind 75</h1>
      <h3>List of Google's Blind 75 Problems!!</h3>
      <div className="menu">
        {categoriesState.map((category) => (
          <div
            key={category.name}
            className={`toggle ${
              activeCategory === category.name ? "expanded" : ""
            }`}
            onClick={() => toggleCategory(category.name)}
          >
            {category.name}
            {activeCategory === category.name && (
              <div className={`lists expanded`}>
                <ProblemList
                  problems={category.problems}
                  onProblemToggle={toggleProblem}
                />
                <div className="progress-bar">
                  {category.name} Progress: {getCategoryProgress(category).toFixed(2)}%
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}