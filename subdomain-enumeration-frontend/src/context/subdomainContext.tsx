import React, { ReactNode, createContext, useState } from "react";
import { StateSubdomainsContext } from "../types/StateSubdomainsContext";

export const subdomainContext = createContext<StateSubdomainsContext>({
  subdomains: [],
  setSubDomains: () => {},
});

export const SubdomainProvider = ({ children }: { children: ReactNode }) => {
  const [subdomains, setSubDomains] = useState<string[]>([]);
  return (
    <subdomainContext.Provider value={{ subdomains, setSubDomains }}>
      {children}
    </subdomainContext.Provider>
  );
};