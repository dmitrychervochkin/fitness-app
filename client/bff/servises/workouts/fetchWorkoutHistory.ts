import { getWorkoutHistory } from "@/bff/api";

export const fetchWorkoutHistory = async () => {
    const { workoutHistory, message } = await getWorkoutHistory();

    if (!workoutHistory || message) {
        return {
            res: null,
            error: message || "Ошибка при получении истории",
        };
    }

    return { res: workoutHistory, error: null };
};
