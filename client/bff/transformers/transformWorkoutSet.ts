import { IWorkoutSet, WorkoutSetPayload } from "@/types";

export const transformWorkoutSet = (
    dbWorkoutSet: WorkoutSetPayload
): IWorkoutSet => ({
    id: dbWorkoutSet.id,
    workoutExerciseId: dbWorkoutSet.workout_exercise_id,
    setNumber: dbWorkoutSet.set_number,
    reps: dbWorkoutSet.reps,
    weight: dbWorkoutSet.weight,
    durationSeconds: dbWorkoutSet.duration_seconds,
    rpe: dbWorkoutSet.rpe,
});
