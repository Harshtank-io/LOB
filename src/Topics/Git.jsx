import React, { useState } from "react";
import styles from "./css/common.module.css";
import gitData from "../utils/json/gitData.json";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BackButton } from "../components/BackButton";
import CopyButton from "../components/CopyButton";
import codeBlockStyles from "./const/codeBlockstyle";

function Git() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["index"]}>
          <BackButton />
          <ul>
            {gitData.git_commands.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["content"]}>
          {gitData.git_commands.map((section) => (
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

export default Git;
