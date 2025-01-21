"use client";

import React, { FC, memo, useState } from "react";
import { CodeBlock } from "@/components/codeblock";

const basicCode = `
    import React, { FC } from "react";

    const BaseComponent: FC<BaseProps> = ({ name }) => {
      console.log("BaseComponent Rendered");
      return (
        <h5>{ name }</h5>
      );
    };
`;

const memoCode = `
    import React, { FC, memo } from "react";

    const MemoComponent: FC<BaseProps> = memo(({ name }) => {
      console.log("MemoComponent Rendered");
      return (
        <h5>{ name }</h5>
      );
    });
`;

interface BaseProps {
  name: string;
}

const BaseComponent: FC<BaseProps> = ({ name }) => {
  console.log("BaseComponent Rendered");
  return <h5>{name}</h5>;
};

const MemoComponent: FC<BaseProps> = memo(({ name }) => {
  console.log("MemoComponent Rendered");
  return <h5>{name}</h5>;
});

MemoComponent.displayName = "MemoComponent";

const Memo: FC = () => {
  const [selectedBlock, setSelectedBlock] = useState<"basic" | "memo">("basic");
  const [counter, setCounter] = useState(0);

  const ComponentToRender =
    selectedBlock === "basic" ? BaseComponent : MemoComponent;

  return (
    <div className="container mx-auto space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">What is Memoisation?</h3>
        <p className="mb-4 text-gray-400">
          Memoisation is a technique used in React to optimise performance by
          preventing unnecessary re-renders of components. By wrapping a
          component with <code>React.memo</code>, React ensures that the component
          only re-renders if its props change. This can help reduce computational
          overhead and improve application performance.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
        <p className="mb-4 text-gray-400">
          In this example, you can observe the behaviour of a regular component
          and a memoised component. When the counter is incremented, the parent
          component re-renders. The <strong>BaseComponent</strong> will always
          re-render, but the <strong>MemoComponent</strong> will only re-render if
          its <code>props</code> change. Open the console to see which component
          is re-rendering.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">The Code</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Basic Code Block */}
          <div
            onClick={() => setSelectedBlock("basic")}
            className={`cursor-pointer ${
              selectedBlock === "basic"
                ? "border-4 border-blue-500"
                : "border-4 border-transparent"
            } rounded-lg`}
          >
            <CodeBlock code={basicCode} language="javascript" />
          </div>

          {/* Memo Code Block */}
          <div
            onClick={() => setSelectedBlock("memo")}
            className={`cursor-pointer ${
              selectedBlock === "memo"
                ? "border-4 border-blue-500"
                : "border-4 border-transparent"
            } rounded-lg`}
          >
            <CodeBlock code={memoCode} language="javascript" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">What You Are Seeing</h3>
        <p className="mb-4 text-gray-400">
          - When <strong>BaseComponent</strong> is selected, you will see a
          &quot;BaseComponent Rendered&quot; log in the console every time the counter
          changes, even though the props do not change.
          <br />
          - When <strong>MemoComponent</strong> is selected, you will see
          &quot;MemoComponent Rendered&quot; only when the props change (e.g., when you
          toggle between the components), not when the counter changes.
        </p>

        {/* Counter */}
        <h3 className="text-2xl font-bold mb-4">Try It Yourself</h3>
        <div className="mb-4">
          <p className="text-lg">Counter: {counter}</p>
          <button
            onClick={() => setCounter(counter + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Increment Counter
          </button>
        </div>
      </div>

      {/* Selected Component */}
      <div className="mt-8 p-4 border-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">
          Rendered Component ({selectedBlock === "basic" ? "Base" : "Memoised"})
        </h3>
        <ComponentToRender
          name={selectedBlock === "basic" ? "Base" : "Memoised"}
        />
      </div>
    </div>
  );
};

Memo.displayName = "Memo";

export default Memo;