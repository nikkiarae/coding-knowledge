"use client";

import React, { FC, useState, useCallback, memo } from "react";
import { CodeBlock } from "@/components/codeblock";

// Code Blocks
const basicCode = `
    import React, { FC } from "react";

    const Counter: FC = ({ onIncrement }) => {
      console.log("Counter Rendered");
      return <button onClick={onIncrement}>Increment</button>;
    };

    const App: FC = () => {
      const [count, setCount] = useState(0);

      const increment = () => {
        setCount((prev) => prev + 1);
      };

      return (
        <div>
          <p>Count: {count}</p>
          <Counter onIncrement={increment} />
        </div>
      );
    };
`;

const callbackCode = `
    import React, { FC, useCallback } from "react";

    const Counter: FC = ({ onIncrement }) => {
      console.log("Counter Rendered");
      return <button onClick={onIncrement}>Increment</button>;
    };

    const App: FC = () => {
      const [count, setCount] = useState(0);

      const increment = useCallback(() => {
        setCount((prev) => prev + 1);
      }, []);

      return (
        <div>
          <p>Count: {count}</p>
          <Counter onIncrement={increment} />
        </div>
      );
    };
`;

// Types
interface CounterProps {
  onIncrement: () => void;
}

// Counter Component
const Counter: FC<CounterProps> = memo(({ onIncrement }) => {
  console.log("Counter Rendered");
  return (
    <button
      onClick={onIncrement}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Increment
    </button>
  );
});

// Add a display name for better debugging
Counter.displayName = "Counter";

const UseCallback: FC = () => {
  const [count, setCount] = useState(0);
  const [useMemoisedCallback, setUseMemoisedCallback] = useState(false);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const regularIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const selectedCallback = useMemoisedCallback ? increment : regularIncrement;

  return (
    <div className="container mx-auto space-y-8">
      {/* Introduction */}
      <div>
        <h1 className="text-2xl font-bold mb-4">What is useCallback?</h1>
        <p className="mb-4 text-gray-400">
          <code>useCallback</code> is a React hook that memoises a function, so it
          doesn&apos;t get recreated on every render unless its dependencies change.
          It’s helpful when passing functions as props to memoised components, as it
          avoids unnecessary re-renders.
        </p>
      </div>

      {/* How It Works */}
      <div>
        <h1 className="text-2xl font-bold mb-4">How It Works</h1>
        <p className="mb-4 text-gray-400">
          In this example, the <strong>Counter</strong> component is memoised with
          <code>React.memo</code>. When the parent component re-renders, the
          <strong>Counter</strong> will only re-render if its <code>onIncrement</code>{" "}
          function prop changes. Use the toggle below to switch between a
          memoised and a regular callback.
        </p>
      </div>

      {/* Code Blocks */}
      <div>
        <h1 className="text-2xl font-bold mb-4">The Code</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Regular Callback Code */}
          <div
            onClick={() => setUseMemoisedCallback(false)}
            className={`cursor-pointer ${
              !useMemoisedCallback
                ? "border-4 border-blue-500"
                : "border-4 border-transparent"
            } rounded-lg`}
          >
            <CodeBlock code={basicCode} language="javascript" />
          </div>

          {/* Memoised Callback Code */}
          <div
            onClick={() => setUseMemoisedCallback(true)}
            className={`cursor-pointer ${
              useMemoisedCallback
                ? "border-4 border-blue-500"
                : "border-4 border-transparent"
            } rounded-lg`}
          >
            <CodeBlock code={callbackCode} language="javascript" />
          </div>
        </div>
      </div>

      {/* What You Are Seeing */}
      <div>
        <h1 className="text-2xl font-bold mb-4">What You Are Seeing</h1>
        <p className="mb-4 text-gray-400">
          - When the <strong>Regular Callback</strong> is selected, the
          <strong>Counter</strong> component will re-render every time the parent
          updates, even if the function hasn&apos;t changed.
          <br />
          - When the <strong>Memoised Callback</strong> is selected, the
          <strong>Counter</strong> component will not re-render unless the
          dependencies of <code>useCallback</code> change.
        </p>
      </div>

      {/* Counter */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Try It Yourself</h1>
        <div className="mb-4">
          <p className="text-lg">Counter: {count}</p>
          <Counter onIncrement={selectedCallback} />
        </div>
      </div>
    </div>
  );
};

export default UseCallback;