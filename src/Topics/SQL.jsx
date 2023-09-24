import React, { useState } from "react";
import styles from "./css/common.module.css";
import sqlData from "../utils/json/sqlData.json";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BackButton } from "../components/BackButton";

function SQL() {
  const [copyState, setCopyState] = useState({});

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopyState({ ...copyState, [id]: true });
    setTimeout(() => {
      setCopyState({ ...copyState, [id]: false });
    }, 2000);
  };

  const codeBlockStyles = {
    display: "block",
    backgroundColor: "#000",
    padding: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["index"]}>
        <BackButton />
          <ul>
            {sqlData.sql_concepts.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["content"]}>
          
          {sqlData.sql_concepts.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              <div>
                {section.code_example.code && (
                  <div>
                    {copyState[section.id] ? (
                      <span>Copied!</span>
                    ) : (
                      <button
                        onClick={() =>
                          copyToClipboard(section.code_example.code, section.id)
                        }
                        className={styles["copy-button"]}
                      >
                        {copyState[section.id] ? "Copied!" : "Copy"}
                      </button>
                    )}
                  </div>
                )}
              </div>
              {section.code_example.code && (
                <SyntaxHighlighter
                  language="sql"
                  style={atomOneDark}
                  customStyle={codeBlockStyles}
                  wrapLongLines={true}
                >
                  {section.code_example.code}
                </SyntaxHighlighter>
              )}
              {section.code_example.output && (
                <div>
                  Output
                  <SyntaxHighlighter
                    style={atomOneDark}
                    customStyle={codeBlockStyles}
                    wrapLongLines={true}
                  >
                    {section.code_example.output}
                  </SyntaxHighlighter>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default SQL;
