"use client";

import React, { FC, useReducer } from "react";
import { CodeBlock } from "@/components/codeblock";

const basicCode = `
    import React, { useReducer } from "react";

    interface State {
      count: number;
    }

    interface Action {
      type: "increment" | "decrement" | "reset";
    }

    const initialState: State = { count: 0 };

    const reducer = (state: State, action: Action): State => {
      switch (action.type) {
        case "increment":
          return { ...state, count: state.count + 1 };
        case "decrement":
          return { ...state, count: state.count - 1 };
        case "reset":
          return initialState;
        default:
          return state;
      }
    };

    const App: React.FC = () => {
      const [state, dispatch] = useReducer(reducer, initialState);

      return (
        <div>
          <p>Count: {state.count}</p>
          <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
          <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
      );
    };

    export default App;
`;

interface State {
  count: number;
}

interface Action {
  type: "increment" | "decrement" | "reset";
}

const UseReducer: FC = () => {
  const initialState: State = { count: 0 };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mx-auto space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">What is useReducer?</h3>
        <p className="mb-4 text-gray-400">
          <code>useReducer</code> is a React hook that provides an alternative to <code>useState</code> for managing complex state logic. 
          It is particularly useful when state transitions are dependent on the type of actions dispatched.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
        <p className="mb-4 text-gray-400">
          In this example, <code>useReducer</code> is used to manage a counter. The reducer function takes the current state and an action 
          to determine the next state. Different actions (<code>increment</code>, <code>decrement</code>, and <code>reset</code>) modify 
          the state accordingly.
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
          - The counter value is managed using <code>useReducer</code>, and the reducer function handles actions to update the state.
          <br />
          - You can increment, decrement, or reset the counter by dispatching the respective actions.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">Try It Yourself</h3>
        <p className="mb-4 text-gray-400">
          Click the buttons below to dispatch actions and observe how the state changes.
        </p>

        {/* Counter and Actions */}
        <div className="text-center space-y-4">
          <p className="text-lg">Count: {state.count}</p>
          <div className="space-x-4">
            <button
              onClick={() => dispatch({ type: "increment" })}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch({ type: "decrement" })}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch({ type: "reset" })}
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

export default UseReducer;