import { WorkoutTemplatePayload } from "@/types";

export const transformWorkoutTemplate = (
    dbWorkoutTemplate: WorkoutTemplatePayload
) => ({
    id: dbWorkoutTemplate.id,
    name: dbWorkoutTemplate.name,
    description: dbWorkoutTemplate.description,
    createdBy: dbWorkoutTemplate.created_by,
    isPublic: dbWorkoutTemplate.is_public,
    createdAt: dbWorkoutTemplate.created_at,
});
