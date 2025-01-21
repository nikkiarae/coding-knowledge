"use client";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      className="rounded-lg overflow-auto shadow-md" // Add Tailwind classes here
      customStyle={{ margin: 0, paddingBottom: 32 }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;