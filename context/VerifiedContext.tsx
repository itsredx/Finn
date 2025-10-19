import React, { createContext, useContext } from 'react';

const VerifiedContext = createContext<boolean | undefined>(undefined);

export const VerifiedProvider = VerifiedContext.Provider;

export function useIsVerifiedContext(): boolean {
  const ctx = useContext(VerifiedContext);
  return ctx ?? false;
}

export default VerifiedContext;
