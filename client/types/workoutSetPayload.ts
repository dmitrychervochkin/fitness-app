export type WorkoutSetPayload = {
    id: string;
    workout_exercise_id: string;
    set_number: number;
    reps: number;
    weight: number;
    duration_seconds: null | number;
    rpe: number;
};
