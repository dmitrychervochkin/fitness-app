import { getWorkoutSets } from "@/bff/api";

export const fetchWorkoutSets = async () => {
    const { workoutSets, message } = await getWorkoutSets();

    if (!workoutSets || message) {
        return {
            res: null,
            error: message || "Ошибка при получении сетов из тренировки",
        };
    }

    return { res: workoutSets, error: null };
};
