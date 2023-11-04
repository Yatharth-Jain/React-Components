import React, { createContext, useState } from 'react';

interface GlobalContextProps {
  selectedGraph?: any;
  setSelectedGraph?: any;
}

export const globalContext = createContext<GlobalContextProps>({});

export default function GlobalContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [selectedGraph, setSelectedGraph] = useState();
  return (
    <globalContext.Provider value={{ selectedGraph, setSelectedGraph }}>
      {children}
    </globalContext.Provider>
  );
}
