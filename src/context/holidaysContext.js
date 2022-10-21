import { createContext } from "react";
import { useState } from "react";
import { useHolidays } from "../hooks/useHolidays";

export const holidaysContext = createContext({});

export const HolidaysContextProvider = ({ children }) => {
    const [holiday, setHoliday] = useState('Выбрать праздник');
    const [holidays] = useHolidays();
    const changeHoliday = title => {
        setHoliday(title);
    }

    return (
        <holidaysContext.Provider value={{ holidays, holiday, setHoliday }}>
            {children}
        </holidaysContext.Provider>
    )

}