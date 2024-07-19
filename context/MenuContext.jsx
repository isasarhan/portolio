'use client';
import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function useSidebarContext() {
  return useContext(SidebarContext);
}

const SidebarProvider = ({ children }) => {
  const [showCanvas, setShowCanvas] = useState(false);
  const toggleCanvas = () => {
    setShowCanvas((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ showCanvas, toggleCanvas }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
