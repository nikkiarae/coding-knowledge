"use client";

import { Tab, Tabs, TabsList } from "@mui/base";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import clsx from "clsx";

const tabs = [
  { name: "useState", href: "/state/useState" },
  { name: "useReducer", href: "/state/useReducer" },
  { name: "Context API", href: "/state/context-api" },
  { name: "Jotai", href: "/state/jotai" }

];

const OptimisationLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  
  return (
    <div className="container mx-auto p-4 mb-20">
      <h1 className="text-4xl font-bold mb-4">State</h1>

      {/* Tabs Navigation */}
      <Tabs value={pathname} className="mb-4">
        <TabsList>
          { tabs.map((tab, idx) => (
            <Tab
              key={idx}
              value={tab.href}
              className={clsx(
                "px-4 py-2 rounded-lg text-lg font-large transition focus:outline-none",
                pathname === tab.href
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-300 hover:text-white"
              )}
            >
              <Link href={tab.href}>{tab.name}</Link>
            </Tab>
          ))}
        </TabsList>
      </Tabs>

      {/* Tabs Content */}
      <div>{children}</div>
    </div>
  );
};

export default OptimisationLayout;