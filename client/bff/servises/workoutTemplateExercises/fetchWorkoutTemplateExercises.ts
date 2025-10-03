import { getWorkoutTemplateExercises } from "@/bff/api";

export const fetchWorkoutTemplateExercises = async (templateId: string) => {
    const { workoutTemplateExercises, message } =
        await getWorkoutTemplateExercises(templateId);

    if (!workoutTemplateExercises || message) {
        return {
            res: null,
            error: message || "Ошибка при получении упражнений из шаблона",
        };
    }

    return { res: workoutTemplateExercises, error: null };
};
