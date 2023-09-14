import React from "react";
import { Link } from "react-router-dom";
import "../css/Learn.css";

function Learn() {
  return (
    <div className="learn-container">
      <div className="head">
        <h1>Learn Concepts</h1>
      </div>
      <div className="topics">
        <div className="topic-container">
          <Link to="/dsa" className="topic">
            DSA
          </Link>
          <Link to="/oop" className="topic">
            OOP
          </Link>
          <Link to="/javascript" className="topic">
            Javascript
          </Link>
          <Link to="/clean-code" className="topic">
            Clean Code
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Learn;
