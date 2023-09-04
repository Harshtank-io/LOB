import React from 'react';
import '../css/Learn.css';

const topics = [
  {
    id: 1,
    name: "DSA"
  },
  {
    id: 2,
    name: "OOP"
  },
  // Add more topics as needed
];

function Learn() {
  const topicDivs = topics.map((topic) => (
    <div key={topic.id} className="topic">
      {topic.name}
    </div>
  ));

  return (
    <div className="learn-container">
      <div className="head">
        <h1>Learn Concepts</h1>
      </div>
      <div className="topics">
        <div className="topic-container">
          {topicDivs}
        </div>
      </div>
    </div>
  );
}

export default Learn;
