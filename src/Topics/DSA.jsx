import React, { useState } from "react";
import styles from "./css/common.module.css";
import dsaData from "../utils/json/dsaData.json";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BackButton } from "../components/BackButton";
import CopyButton from "../components/CopyButton";
import codeBlockStyles from "./const/codeBlockstyle";
function DSA() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["index"]}>
          <BackButton />
          <ul>
            {dsaData.dsa_concepts.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["content"]}>
          {dsaData.dsa_concepts.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              <div>
                {section.code_example.code && (
                  <CopyButton
                    code={section.code_example.code}
                    id={section.id}
                  />
                )}
              </div>
              {section.code_example.code && (
                <SyntaxHighlighter
                  language="c"
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

export default DSA;
