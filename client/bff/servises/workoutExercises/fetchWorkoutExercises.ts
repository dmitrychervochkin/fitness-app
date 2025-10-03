import { getWorkoutExercises } from "@/bff/api";

export const fetchWorkoutExercises = async () => {
    const { workoutExercises, message } = await getWorkoutExercises();

    if (!workoutExercises || message) {
        return {
            res: null,
            error: message || "Ошибка при получении упражнений из тренировки",
        };
    }

    return { res: workoutExercises, error: null };
};
