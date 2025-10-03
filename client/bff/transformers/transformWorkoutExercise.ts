import { IWorkoutExercise, WorkoutExercisePayload } from "@/types";

export const transformWorkoutExercise = (
    dbWorkoutExercise: WorkoutExercisePayload
): IWorkoutExercise => ({
    id: dbWorkoutExercise.id,
    workoutId: dbWorkoutExercise.workout_id,
    exerciseId: dbWorkoutExercise.exercise_id,
    orderIndex: dbWorkoutExercise.order_index,
});
