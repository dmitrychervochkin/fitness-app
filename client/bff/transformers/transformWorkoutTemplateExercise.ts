import { WorkoutTemplateExercisePayload } from "@/types";

export const transformWorkoutTemplateExercise = (
    dbWorkoutTemplateExercise: WorkoutTemplateExercisePayload
) => ({
    id: dbWorkoutTemplateExercise.id,
    templateId: dbWorkoutTemplateExercise.template_id,
    exerciseId: dbWorkoutTemplateExercise.exercise_id,
    sets: dbWorkoutTemplateExercise.sets,
    reps: dbWorkoutTemplateExercise.reps,
    restSeconds: dbWorkoutTemplateExercise.rest_seconds,
    orderIndex: dbWorkoutTemplateExercise.order_index,
});
