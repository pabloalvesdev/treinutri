import { useState } from "react";
import IWorkout from "../../../Interfaces/IWorkout";
import IExercise from "../../../Interfaces/IExercise";
import { useMainContext } from "../../../Context";
import Accordion from "../../../Components/Accordion";

interface Props {
    item: IWorkout;
}

const Workout = ({item}: Props) => {
    const { setHeader } = useMainContext();
    const [selected, setSelected] = useState<IExercise | null>(null);
    const route = (e: IExercise) => {
        setSelected(e);
        setHeader({
            title: e.title,
            back: () => setSelected(null)
        })
    }
    return(
        <div>
            {item.exercises.map(e => <Accordion title={e.title}>
                <p>Descrição: {e.description}</p>
                <p>Obervações: {e.description}</p>
            </Accordion>)}
            {/* opcoes */}
            {selected && <p className="font-bold text-lg">Movimento: {selected.title}</p>}
        </div>
    )
}

export default Workout;