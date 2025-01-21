"use client";

import React, { FC, useState } from "react";
import { CodeBlock } from "@/components/codeblock";

const basicCode = `
    import React, { FC, useState } from "react";

    const Counter: FC = () => {
      const [count, setCount] = useState<number>(0);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      );
    };

    export default Counter;
`;

const UseState: FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="container mx-auto space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">What is useState?</h3>
        <p className="mb-4 text-gray-400">
          <code>useState</code> is a React hook that allows you to add state to functional components. 
          It returns a tuple with two elements: the current state value and a function to update that state.
          With TypeScript, we can specify the type of the state value to ensure type safety.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
        <p className="mb-4 text-gray-400">
          In this example, a counter is managed using <code>useState</code>. The state type is specified as a 
          <code>number</code> to ensure type safety. The state is updated with three buttons to increment, decrement, or reset the counter.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">The Code</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Code Block */}
          <div className="border-4 border-blue-500 rounded-lg">
            <CodeBlock code={basicCode} language="javascript" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">What You Are Seeing</h3>
        <p className="mb-4 text-gray-400">
          - The counter is managed using the <code>useState</code> hook.
          <br />
          - The state updates immediately when you click the buttons.
          <br />
          - TypeScript ensures that the state is a number, reducing errors.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">Try It Yourself</h3>
        <p className="mb-4 text-gray-400">
          Use the buttons below to manipulate the counter value and observe how the state updates.
        </p>

        {/* Inputs and Result */}
        <div className="text-center space-y-4">
          <p className="text-lg">Count: {count}</p>
          <div className="space-x-4">
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Increment
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Decrement
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseState;