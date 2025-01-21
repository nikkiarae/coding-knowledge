"use client";

import React, { createContext, FC, ReactNode, useContext, useState } from "react";
import { CodeBlock } from "@/components/codeblock";

const basicCode = `
    import React, { createContext, useContext, useState, FC } from "react";

    const CounterContext = createContext({ count: 0, setCount: () => {} });

    const CounterProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
      const [count, setCount] = useState(0);

      return (
        <CounterContext.Provider value={{ count, setCount }}>
          {children}
        </CounterContext.Provider>
      );
    };

    const CounterDisplay = () => {
      const { count } = useContext(CounterContext);
      return <p>Count: {count}</p>;
    };

    const CounterControls = () => {
      const { setCount } = useContext(CounterContext);
      return (
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
          <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        </div>
      );
    };

    const App = () => {
      return (
        <CounterProvider>
          <CounterDisplay />
          <CounterControls />
        </CounterProvider>
      );
    };

    export default App;
`;

interface CounterContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

// Create the Context
const CounterContext = createContext<CounterContextProps | undefined>(undefined);

// Context Provider
const CounterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// Component to Display Count
const CounterDisplay: FC = () => {
  const context = useContext(CounterContext);
  if (!context) throw new Error("CounterDisplay must be used within a CounterProvider");

  const { count } = context;

  return <p className="text-lg">Count: {count}</p>;
};

// Component for Counter Controls
const CounterControls: FC = () => {
  const context = useContext(CounterContext);
  if (!context) throw new Error("CounterControls must be used within a CounterProvider");

  const { setCount } = context;

  return (
    <div className="space-x-4">
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Decrement
      </button>
    </div>
  );
};

// Main Component
const SimpleContextAPIExample: FC = () => {
  return (
    <div className="container mx-auto space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">What is Context API?</h3>
        <p className="mb-4 text-gray-400">
          The <code>Context API</code> in React allows you to share data across components without having to pass props manually at every level.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
        <p className="mb-4 text-gray-400">
          In this example, a counter is managed using <code>useState</code>, and the state and its updater function are shared via the <code>Context API</code>.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">The Code</h3>
        <div className="border-4 border-blue-500 rounded-lg">
          <CodeBlock code={basicCode} language="javascript" />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">What You Are Seeing</h3>
        <p className="mb-4 text-gray-400">
          - The <code>CounterContext</code> provides both the count value and a function to update it.
          <br />
          - The <strong>CounterDisplay</strong> component consumes the count value.
          <br />
          - The <strong>CounterControls</strong> component consumes the updater function to modify the count.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">Try It Yourself</h3>
        <CounterProvider>
          <div className="text-center space-y-4">
            <CounterDisplay />
            <CounterControls />
          </div>
        </CounterProvider>
      </div>
    </div>
  );
};

export default SimpleContextAPIExample;