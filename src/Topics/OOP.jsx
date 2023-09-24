import React, { useState } from "react";
import styles from "./css/oop.module.css";
import Footer from "../components/Footer";
import oopData from "./json/oopData.json";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function OOP() {
  const [copyState, setCopyState] = useState({});

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopyState({ ...copyState, [id]: true });
    setTimeout(() => {
      setCopyState({ ...copyState, [id]: false });
    }, 2000); // Hide the message after 2 seconds
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
      <div className={styles["oop-container"]}>
        <div className={styles["index-oop"]}>
          <ul>
            {oopData.oop_concepts.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["oop"]}>
         
          {oopData.oop_concepts.map((section) => (
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
                          copyToClipboard(
                            section.code_example.code,
                            section.id
                          )
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
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default OOP;
