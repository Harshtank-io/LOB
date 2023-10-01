import React, { useState } from "react";
import styles from "./css/oop.module.css";
import Footer from "../components/Footer";
import oopData from "../utils/json/oopData.json";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BackButton } from "../components/BackButton";
import CopyButton from "../components/CopyButton";
import codeBlockStyles from "./const/codeBlockstyle";
function OOP() {
  return (
    <>
      <div className={styles["oop-container"]}>
        <div className={styles["index-oop"]}>
          <BackButton />
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
                  <CopyButton
                    code={section.code_example.code}
                    id={section.id}
                  />
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
     
        </div>
      </div>
    </>
  );
}

export default OOP;
