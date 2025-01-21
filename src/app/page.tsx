"use client";

import React from "react";
import Link from "next/link";

const categories = [
  {
    title: "Optimisation",
    links: [
      { title: "Memoisation", description: "Learn about React.memo and useMemo.", href: "/optimisation/memo" },
      { title: "useCallback", description: "Understand how to use useCallback.", href: "/optimisation/callback" },
      { title: "useMemo", description: "Dive into the useMemo hook for performance.", href: "/optimisation/useMemo" },
    ],
  },
  {
    title: "State Management",
    links: [
      { title: "useState", description: "Learn about managing local component state.", href: "/state/useState" },
      { title: "useReducer", description: "Learn about complex state management with useReducer.", href: "/state/useReducer" },
      { title: "Context API", description: "Share state globally with Context API.", href: "/state/context-api" },
      { title: "Jotai", description: "Understand Jotai atoms and selectors", href: "/state/jotai" },
    ],
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Coding Principles Application</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition duration-200"
          >
            <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
            <div className="space-y-2">
              {category.links.map((link, subIndex) => (
                <Link
                  key={subIndex}
                  href={link.href}
                  className="block text-blue-500 hover:text-blue-600"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{link.title}</h3>
                    <p className="text-gray-600">{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}