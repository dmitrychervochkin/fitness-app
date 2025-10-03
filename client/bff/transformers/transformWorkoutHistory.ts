import { WorkoutHistoryPayload, IWorkoutHistory } from "@/types";

export const transformWorkoutHistory = (
    dbWorkoutHistory: WorkoutHistoryPayload
): IWorkoutHistory => ({
    month: dbWorkoutHistory.month,
    workouts: dbWorkoutHistory.workouts.map((workout) => ({
        id: workout.id,
        date: workout.date,
        duration: workout.duration,
        totalWeight: workout.total_weight,
        notes: workout.notes,
        templateId: workout.template_id,
        templateName: workout.template_name,
        exercises: workout.exercises.map((exercise) => ({
            name: exercise.name,
            reps: exercise.reps,
        })),
    })),
});
