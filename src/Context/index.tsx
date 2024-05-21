import React, { createContext, useContext, useMemo, useState } from "react";
import IWorkout from "../Interfaces/IWorkout";
import IExercise from "../Interfaces/IExercise";
import ISpreadsheet from "../Interfaces/ISpreadsheet";
import IHeader from "../Interfaces/IHeader";

interface Props {
    children: React.ReactNode;
}
interface IMainContext {
    menu: string | null;
    setMenu: React.Dispatch<React.SetStateAction<string | null>>;
    header: IHeader;
    setHeader: React.Dispatch<React.SetStateAction<IHeader>>;
    // exercises: IExercise[] | null;
}

const MainContext = createContext<IMainContext>({} as IMainContext);

const MainContextProvider = ({ children }:Props) => {
    const [menu, setMenu] = useState<string | null>(null);
    const [header, setHeader] = useState<IHeader>({} as IHeader);
    // const [spreadsheet, setSpreadsheet] = useState<ISpreadsheet | null>(null);
    // const [workout, setWorkout] = useState<IWorkout | null>(null);

    const values: IMainContext = useMemo(()=>({
        menu,
        setMenu,
        header,
        setHeader
    }), [menu, setMenu, header, setHeader]);
    
    return <MainContext.Provider value={values}>{children}</MainContext.Provider>
};

export const useMainContext = () => {
    return useContext(MainContext);
}

export default MainContextProvider;