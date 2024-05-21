import { useEffect, useState } from "react";
import jsonTreinos from "../../treinos.json"
import ISpreadsheet from "../../Interfaces/ISpreadsheet";
import WorkoutItem from "./Components/Spreadsheet";
import { useMainContext } from "../../Context";
import Workout from "./Components/Spreadsheet";
import Spreadsheet from "./Components/Spreadsheet";

const WorkSection = () => {
    const { setHeader } = useMainContext();
    const [selected, setSelected] = useState<ISpreadsheet | null>(null);
    const [spreadsheetList, setSpreadsheetList] = useState<ISpreadsheet[] | null>(null);
    
    const route = (e: ISpreadsheet) => {
        setSelected(e);
        setHeader({
            title: e.title,
            back: () => setSelected(null)
            // back: () => alert("Voltar Work")
        })
    }
    
    const getData = () => {
        setSpreadsheetList(jsonTreinos)
    }

    useEffect(()=>{
        getData();
    }, []);
    return (
        <>
            {/* opcoes */}
            {!selected && spreadsheetList && spreadsheetList.map(tr => <div onClick={a => route(tr)} className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer p-5 my-5 rounded-lg">
                <p className="font-bold text-lg">Planilha: {tr.title}</p>
            </div>)}
            
            {/* treino selecionado */}
            {selected && <div>
                <Spreadsheet item={selected} />
            </div>}
        </>
    )
};

export default WorkSection;