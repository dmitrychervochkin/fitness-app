import { getMuscleGroups } from "@/bff/api";

export const fetchMuscleGroups = async () => {
    const { muscleGroups, message } = await getMuscleGroups();

    if (!muscleGroups || message) {
        return {
            res: null,
            error: message || "Ошибка при получении мышечных групп",
        };
    }

    return { res: muscleGroups, error: null };
};
