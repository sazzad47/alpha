import React, { createContext, useState } from "react";

export const Context = createContext();

export const StoreProvider = (props) => {
    const [imageSearch, setImageSearch] = useState(false);

    return (
        <Context.Provider
            value={{
                imageSearch,
                setImageSearch,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
