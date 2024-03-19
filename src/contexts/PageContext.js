import React, { createContext, useState } from 'react';

export const PageContext = createContext(null);

export const PageContextProvider = ({ children }) => {
    const [activeItem, setActiveItem] = useState(null);

    return (
        <PageContext.Provider value={{ activeItem, setActiveItem }}>
            {children}
        </PageContext.Provider>
    );
};

