import { useEffect, useState } from "react";
import Diets from "./Components/Diets";
import IDiet from "../../Interfaces/IDiet";
import jsonDietas from "../../diets.json";
import IMeal from "../../Interfaces/IMeal";
import Accordion from "../../Components/Accordion";

const NutriSection = () => {
    const [selected, setSelected] = useState<IMeal | null>(null);
    const [meals, setMeals] = useState<IMeal[]>([] as IMeal[]);

    const getData = () => {
        setMeals(jsonDietas);
    }

    useEffect(()=>{
        getData();
    }, []);

    return(
        <>
            {!selected && meals.map(meal => <p onClick={() => setSelected(meal)} className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer p-5 my-5 rounded-lg">{meal.Title}</p>)}
            {selected && selected.Options.map(sub => <Accordion title={sub.Title}>
                {sub.Description.split(" | ").map(p => <p>{p.replace(" ", " - ")}</p>)}
            </Accordion>)}
        </>
    )
};

export default NutriSection;