"use client";

import React, { FC } from "react";
import { useAtom } from "jotai";
import { CodeBlock } from "@/components/codeblock";

// Atoms
import { atom } from "jotai";

// Atom for managing counter
export const counterAtom = atom<number>(0);

// Derived atom for double the counter value
export const doubleCounterAtom = atom<number>((get) => get(counterAtom) * 2);

// Code examples
const basicAtomCode = `
    import { atom } from "jotai";

    // Atom for managing counter
    export const counterAtom = atom<number>(0);

    // Derived atom for double the counter value
    export const doubleCounterAtom = atom<number>((get) => get(counterAtom) * 2);
`;

const jotaiExampleCode = `
    "use client";

    import { useAtom } from "jotai";
    import { counterAtom, doubleCounterAtom } from "@/state/atoms";

    const JotaiExample = () => {
      const [counter, setCounter] = useAtom(counterAtom); // Access state atom
      const [doubleCounter] = useAtom(doubleCounterAtom); // Access derived state atom

      return (
        <div>
          <h1>Jotai Example</h1>
          <p>Counter: {counter}</p>
          <p>Double Counter: {doubleCounter}</p>
          <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
          <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
          <button onClick={() => setCounter(0)}>Reset</button>
        </div>
      );
    };

    export default JotaiExample;
`;

const JotaiExample: FC = () => {
  const [counter, setCounter] = useAtom(counterAtom); // Access state atom
  const [doubleCounter] = useAtom(doubleCounterAtom); // Access derived state atom

  return (
    <div className="container mx-auto space-y-8">
      {/* Introduction */}
      <div>
        <h1 className="text-2xl font-bold mb-4">What is Jotai?</h1>
        <p className="mb-4 text-gray-400">
          Jotai is a lightweight state management library for React. It uses an atomic approach where state is managed as small, composable units called atoms. These atoms can hold values or derive their values from other atoms.
        </p>
      </div>

      {/* How It Works */}
      <div>
        <h1 className="text-2xl font-bold mb-4">How It Works</h1>
        <p className="mb-4 text-gray-400">
          In this example, we use two Jotai atoms:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-400">
          <li>
            <strong>counterAtom</strong>: A simple atom that holds the counter value.
          </li>
          <li>
            <strong>doubleCounterAtom</strong>: A derived atom that computes double the value of <code>counterAtom</code>.
          </li>
        </ul>
        <p className="mb-4 text-gray-400">
          The state is shared and can be accessed across the application using the <code>useAtom</code> hook.
        </p>
      </div>

      {/* The Code */}
      <div>
        <h1 className="text-2xl font-bold mb-4">The Code</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Atom Code Block */}
          <div className="border-4 border-blue-500 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Atoms</h3>
            <CodeBlock code={basicAtomCode} language="javascript" />
          </div>

          {/* Component Code Block */}
          <div className="border-4 border-blue-500 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Component</h3>
            <CodeBlock code={jotaiExampleCode} language="javascript" />
          </div>
        </div>
      </div>

      {/* What You Are Seeing */}
      <div>
        <h1 className="text-2xl font-bold mb-4">What You Are Seeing</h1>
        <p className="mb-4 text-gray-400">
          - The <strong>counterAtom</strong> holds the current counter value.
          <br />
          - The <strong>doubleCounterAtom</strong> derives its value from <strong>counterAtom</strong> by doubling it.
          <br />
          - You can interact with the counter using the buttons below, and observe how the state updates dynamically.
        </p>
      </div>

      {/* Try It Yourself */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Try It Yourself</h1>
        <div className="text-center space-y-4">
          <p className="text-lg">Counter: {counter}</p>
          <p className="text-lg">Double Counter: {doubleCounter}</p>
          <div className="space-x-4">
            <button
              onClick={() => setCounter((prev) => prev + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Increment
            </button>
            <button
              onClick={() => setCounter((prev) => prev - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Decrement
            </button>
            <button
              onClick={() => setCounter(0)}
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

export default JotaiExample;