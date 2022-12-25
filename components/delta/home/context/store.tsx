import React, { createContext, useMemo, useReducer } from "react";
import { initState } from "./initState";
import { DeltaProps } from "./props";
import sidebarReducer from "./sidebarReducer";


export interface StoreProps {
  state: DeltaProps;
  dispatch: React.Dispatch<any>;
}

interface ProviderProps {
  children: React.ReactNode;
}


export const Context = createContext<StoreProps | null>(null);


const StoreProvider = ({children}: ProviderProps) => {
  const [state, dispatch] = useReducer(sidebarReducer, initState);
  const store = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return (
    <Context.Provider value={store}>{children}</Context.Provider>
  );
};

export { StoreProvider };
