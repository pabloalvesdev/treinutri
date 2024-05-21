import IExercise from "./IExercise";

interface IWorkout {
    title: string;
    exercises: IExercise[];
};

export default IWorkout;