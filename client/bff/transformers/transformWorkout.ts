import { IWorkout, WorkoutPayload } from "@/types";

export const transformWorkout = (dbWorkout: WorkoutPayload): IWorkout => ({
    id: dbWorkout.id,
    userId: dbWorkout.user_id,
    templateId: dbWorkout.template_id,
    date: dbWorkout.date,
    duration: dbWorkout.duration,
    totalWeight: dbWorkout.total_weight,
    notes: dbWorkout.notes,
    createdAt: dbWorkout.created_at,
});
