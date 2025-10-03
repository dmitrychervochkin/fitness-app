import { getWorkoutTemplateExercises, getWorkoutTemplates } from "@/bff/api";

export const fetchWorkoutTemplates = async () => {
    const { workoutTemplates, message } = await getWorkoutTemplates();

    if (!workoutTemplates || message) {
        return {
            res: null,
            error: message || "Ошибка при получении шаблонов тренировок",
        };
    }

    const templatesWithCount = await Promise.all(
        workoutTemplates.map(async (item) => {
            const { workoutTemplateExercises } =
                await getWorkoutTemplateExercises(item.id);
            const exerciseCount = workoutTemplateExercises?.length;
            return { ...item, exerciseCount };
        })
    );

    return { res: templatesWithCount, error: null };
};
