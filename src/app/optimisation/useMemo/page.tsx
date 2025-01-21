"use client";

import React, { FC, useMemo, useState } from "react";
import { CodeBlock } from "@/components/codeblock";

const basicCode = `
    import React, { useState, FC } from "react";

    const App: FC = () => {
      const [count, setCount] = useState(0);
      const [text, setText] = useState("");

      const computeExpensiveValue = (num: number) => {
        console.log("Computing expensive value...");
        let total = 0;
        for (let i = 0; i < 1e7; i++) {
          total += num;
        }
        return total;
      };

      const expensiveValue = computeExpensiveValue(count);

      return (
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something"
          />
          <p>Expensive Value: {expensiveValue}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };
`;

const useMemoCode = `
    import React, { useState, useMemo, FC } from "react";

    const App: FC = () => {
      const [count, setCount] = useState(0);
      const [text, setText] = useState("");

      const computeExpensiveValue = (num: number) => {
        console.log("Computing expensive value...");
        let total = 0;
        for (let i = 0; i < 1e7; i++) {
          total += num;
        }
        return total;
      };

      const expensiveValue = useMemo(() => computeExpensiveValue(count), [count]);

      return (
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something"
          />
          <p>Expensive Value: {expensiveValue}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };
`;

interface BaseProps {
  name: string;
}

const UseMemo: FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [useMemoised, setUseMemoised] = useState(false);

  const computeExpensiveValue = (num: number) => {
    console.log("Computing expensive value...");
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += num;
    }
    return total;
  };

  const expensiveValue = useMemo(() => {
    if (useMemoised) {
      console.log("Using useMemo for computation");
      return computeExpensiveValue(count);
    }
    console.log("Recomputing without useMemo");
    return computeExpensiveValue(count);
  }, [count, useMemoised]);

  return (
    <div className="container mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">What is useMemo?</h1>
        <p className="mb-4 text-gray-400">
          <code>useMemo</code> is a React hook that memoises the result of a
          computation and only recalculates it when its dependencies change.
          This is particularly useful for computationally expensive operations
          that do not need to be recalculated on every render.
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">How It Works</h1>
        <p className="mb-4 text-gray-400">
          In this example, an expensive calculation is performed to compute a
          value. Using <code>useMemo</code>, we can avoid recomputing this
          value unless the relevant dependency (<code>count</code>) changes.
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">The Code</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Regular Code Block */}
          <div
            onClick={() => setUseMemoised(false)}
            className={`cursor-pointer ${
              !useMemoised
                ? "border-4 border-blue-500"
                : "border-4 border-transparent"
            } rounded-lg`}
          >
            <CodeBlock code={basicCode} language="javascript" />
          </div>

          {/* Memoised Code Block */}
          <div
            onClick={() => setUseMemoised(true)}
            className={`cursor-pointer ${
              useMemoised
                ? "border-4 border-blue-500"
                : "border-4 border-transparent"
            } rounded-lg`}
          >
            <CodeBlock code={useMemoCode} language="javascript" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">What You Are Seeing</h1>
        <p className="mb-4 text-gray-400">
          - When <strong>Regular Computation</strong> is selected, the expensive
          function runs on every render, even if it doesn't need to.
          <br />
          - When <strong>Memoised Computation</strong> is selected, the
          expensive function only runs when the dependency (<code>count</code>)
          changes, improving performance.
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Try It Yourself</h1>
        <p className="mb-4 text-gray-400">
          Update the text or increment the counter to observe the effect.
        </p>

        {/* Inputs and Result */}
        <div className="space-y-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something"
            className="p-2 border rounded w-full text-black"
          />
          <p>Expensive Value: {expensiveValue}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Increment Counter
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseMemo;