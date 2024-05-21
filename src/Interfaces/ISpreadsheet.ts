import IWorkout from "./IWorkout";

interface ISpreadsheet {
    title: string;
    description: string;
    workout: IWorkout[];
};

export default ISpreadsheet;