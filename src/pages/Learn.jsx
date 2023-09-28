import React from "react";
import { Link } from "react-router-dom";
import "../css/Learn.css";

function Learn() {
  const topics = [
    { name: "Data Structure & Algorithm", path: "/dsa" },
    { name: "Object-oriented programming", path: "/oop" },
    { name: "SQL", path: "/sql" },
  ];
  return (
    <div className="learn-container">
      <div className="head">
        <h1>Learn Concepts</h1>
      </div>
      <div className="topics">
        <div className="topic-container">
          {topics.map((topic) => (
            <Link key={topic.path} to={topic.path} className="topic">
              {topic.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Learn;
