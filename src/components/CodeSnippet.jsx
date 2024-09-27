import React, { useState } from "react";
import CopyButton from "./CopyButton";

const CodeSnippet = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div
      className="bg-[#9aa5756e] relative  dark:bg-black p-4 rounded-lg mt-3 w-full  mx-auto" // Limited width with 'max-w-md' and centered using 'mx-auto'
    >
      <pre className="text-sm md:text-base lg:text-lg text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words">
        {code}
      </pre>
    <div className="absolute top-2 right-2">
        <CopyButton code={code}/>
    </div>
    </div>
  );
};

export default CodeSnippet;
