import { useState } from "react";
import IWorkout from "../../../Interfaces/IWorkout";
import IExercise from "../../../Interfaces/IExercise";
import { useMainContext } from "../../../Context";
import ISpreadsheet from "../../../Interfaces/ISpreadsheet";
import Workout from "./Workout";

interface Props {
    item: ISpreadsheet;
}

const Spreadsheet = ({item}: Props) => {
    const { setHeader } = useMainContext();
    const [selected, setSelected] = useState<IWorkout | null>(null);
    const route = (e: IWorkout) => {
        setSelected(e);
        setHeader({
            title: e.title,
            back: () => setSelected(null)
        })
    }
    return(
        <div>
            {/* opcoes */}
            {!selected && item.workout && item.workout.map(tr => <div onClick={a => route(tr)} className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer p-5 my-5 rounded-lg">
                <p className="font-bold text-lg">Treino: {tr.title}</p>
            </div>)}
            
            {/* treino selecionado */}
            {selected && <Workout item={selected} />}
        </div>
    )
}

export default Spreadsheet;