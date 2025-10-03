import { IExercise, ExercisePayload } from "@/types";

export const transformExercise = (dbExercise: ExercisePayload): IExercise => ({
    id: dbExercise.id,
    name: dbExercise.name,
    description: dbExercise.description,
    muscleGroupId: dbExercise.muscle_group_id,
    equipment: dbExercise.equipment,
    createdBy: dbExercise.created_by,
    createdAt: dbExercise.created_at,
});
