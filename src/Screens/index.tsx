import { useState } from "react";
import WorkSection from "./WorkSection";
import NutriSection from "./NutriSection";
import { useMainContext } from "../Context";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import Spreadsheet from "./WorkSection";

const Menu = () => {
    const { menu, setMenu, setHeader } = useMainContext();
    const toMenu = (e: any) => {
        const path = e.target.id;
        setMenu(path);
        setHeader({
            title: path,
            back: () => setMenu(null)
        });
    }
    // const [selected, setSelected] = useState<string | null>(null);
    return(
        <Layout>
            {!menu && <>
                <div id="Treino" onClick={toMenu} className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer flex items-center justify-center p-20 rounded-lg">Treino</div>
                <div id="Nutricao" onClick={toMenu} className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer flex items-center justify-center p-20 rounded-lg">Nutricao</div>
            </>}
            {menu && <div className="h-full w-full p-5">
                {menu === "Nutricao" && <NutriSection />}
                {menu === "Treino" && <WorkSection />}
            </div>}
        </Layout>
        
        
    )
};

export default Menu;