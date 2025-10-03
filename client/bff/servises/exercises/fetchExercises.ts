import { getExercises } from "@/bff/api";

export const fetchExercises = async () => {
    const { exercises, message } = await getExercises();

    if (!exercises || message) {
        return {
            res: null,
            error: message || "Ошибка при получении упражнений",
        };
    }

    return { res: exercises, error: null };
};
