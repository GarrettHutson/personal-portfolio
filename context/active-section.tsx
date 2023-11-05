"use client";
import { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContext = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfClick: number;
  setTimeOfClick: React.Dispatch<React.SetStateAction<number>>;
};

export const activeSectionContext = createContext<ActiveSectionContext | null>(
  null,
);
export default function ActiveSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfClick, setTimeOfClick] = useState<number>(0);
  return (
    <activeSectionContext.Provider
      value={{ activeSection, setActiveSection, timeOfClick, setTimeOfClick }}
    >
      {children}
    </activeSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(activeSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContext",
    );
  }
  return context;
}
