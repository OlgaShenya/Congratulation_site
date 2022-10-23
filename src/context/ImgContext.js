import { createContext } from "react";
import { useState } from "react";
import { holidaysContext } from "./holidaysContext";
import { useImg } from "../hooks/useImg";
import { useContext } from "react";

export const imgContext = createContext({});

export const ImgContextProvider = ({ children }) => {
    const { holiday } = useContext(holidaysContext);
    const { urlImg } = useImg(holiday);
    return (
        <imgContext.Provider value={{ urlImg }}>
            {children}
        </imgContext.Provider>
    )
}