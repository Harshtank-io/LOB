import React, { useState } from "react";

function CopyButton({ code, id }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const buttonStyles = {
    backgroundColor: "#570AD5",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      {isCopied ? (
        <span>Copied!</span>
      ) : (
        <button
          onClick={copyToClipboard}
          style={buttonStyles} // Apply inline CSS styles
        >
          Copy
        </button>
      )}
    </div>
  );
}

export default CopyButton;
