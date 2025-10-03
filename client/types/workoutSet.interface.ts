export interface IWorkoutSet {
    id: string;
    setNumber: number;
    reps: number;
    weight: number;
    workoutExerciseId: string;
    durationSeconds: number | null;
    rpe: number;
}
