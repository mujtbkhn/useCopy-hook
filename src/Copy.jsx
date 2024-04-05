import React, { useRef, useState } from "react";
import useCopy from "./useCopy";

const Copy = () => {
  const text = useRef(null);
  const { copiedText, copy } = useCopy();

  const handleCopy = () => {
    const textToCopy = text.current.value;
    copy(textToCopy);
  };
  return (
    <div>
      <input
        type="text"
        name="copy"
        id="copy"
        ref={text}
        placeholder="fill with text to copy"
      />
      <button onClick={() => handleCopy()}>copy text</button>
      {copiedText && <p>copied: {copiedText}</p>}
    </div>
  );
};

export default Copy;
