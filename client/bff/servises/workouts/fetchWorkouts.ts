import { getWorkouts } from "@/bff/api";

export const fetchWorkouts = async () => {
    const { workouts, message } = await getWorkouts();

    if (!workouts || message) {
        return {
            res: null,
            error: message || "Ошибка при получении тренировок",
        };
    }

    return { res: workouts, error: null };
};
