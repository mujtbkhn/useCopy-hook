import React, { useState } from "react";

const useCopy = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (error) {
      console.error("error copying", error);
      setCopiedText(null);
    }
  };

  return { copiedText, copy };
};

export default useCopy;
