import IMeal from "./IMeal";
import IWorkout from "./IWorkout";

interface IDiet {
    title: string;
    description: string;
    meals: IMeal[];
};

export default IDiet;