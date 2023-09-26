import React, { useState } from "react";
import "../css/Product.css";
import problemSet from "../utils/json/problemSet.json";
const categories = problemSet;

function ProblemList({ problems, onProblemToggle }) {
  return (
    <ul>
      {problems.map((problem) => (
        <li key={problem.id}>
          <label className="problem">
            <div className="chk-pro">
              <div className="chk">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  checked={problem.checked}
                  onClick={(event) => event.stopPropagation()}
                  onChange={() => onProblemToggle(problem.id)}
                />
              </div>
              <div className="pro">
                <a
                  className={`list ${problem.checked ? "checked" : ""}`}
                  href={problem.leetcodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {problem.title}
                </a>
              </div>
            </div>
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
    const solvedProblems = category.problems.filter(
      (problem) => problem.checked
    ).length;
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
            <div className="cat-bar">
              <div className="cat">{category.name}</div>
              <div className="progress-bar">
                ({category.problems.filter((problem) => problem.checked).length}
                /{category.problems.length})
                <div className="progress-bar-container">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${getCategoryProgress(category).toFixed(2)}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {activeCategory === category.name && (
              <div className={`lists expanded`}>
                <ProblemList
                  problems={category.problems}
                  onProblemToggle={toggleProblem}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
