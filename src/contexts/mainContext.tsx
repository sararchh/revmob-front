import React from "react";
import { createContext } from "react";

import { toast } from 'react-toastify';

type GeneralProviderProps = {
  children: React.ReactNode;
}


export const GeneralContext = createContext({} );

export function GeneralContextProvider({ children }: GeneralProviderProps) {

  return (
    <GeneralContext.Provider
      value={{

      }}>
      {children}
    </GeneralContext.Provider>
  );
}