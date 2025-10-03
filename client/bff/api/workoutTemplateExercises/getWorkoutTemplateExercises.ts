import { transformWorkoutTemplateExercise } from "@/bff/transformers";

// ====================== MOCK DATA ======================
const WORKOUT_TEMPLATE_EXERCISES = [
    {
        id: "uuid-tpl-ex-1",
        template_id: "uuid-tpl-1",
        exercise_id: "uuid-ex-1",
        sets: 3,
        reps: 10,
        rest_seconds: 90,
        order_index: 1,
    },
    {
        id: "uuid-tpl-ex-2",
        template_id: "uuid-tpl-1",
        exercise_id: "uuid-ex-2",
        sets: 3,
        reps: 8,
        rest_seconds: 120,
        order_index: 2,
    },
    {
        id: "uuid-tpl-ex-3",
        template_id: "uuid-tpl-1",
        exercise_id: "uuid-ex-3",
        sets: 4,
        reps: 12,
        rest_seconds: 120,
        order_index: 3,
    },
    {
        id: "uuid-tpl-ex-4",
        template_id: "uuid-tpl-2",
        exercise_id: "uuid-ex-1",
        sets: 4,
        reps: 12,
        rest_seconds: 90,
        order_index: 1,
    },
    {
        id: "uuid-tpl-ex-5",
        template_id: "uuid-tpl-2",
        exercise_id: "uuid-ex-4",
        sets: 3,
        reps: 10,
        rest_seconds: 60,
        order_index: 2,
    },
    {
        id: "uuid-tpl-ex-6",
        template_id: "uuid-tpl-3",
        exercise_id: "uuid-ex-2",
        sets: 4,
        reps: 8,
        rest_seconds: 120,
        order_index: 1,
    },
    {
        id: "uuid-tpl-ex-7",
        template_id: "uuid-tpl-3",
        exercise_id: "uuid-ex-3",
        sets: 3,
        reps: 10,
        rest_seconds: 120,
        order_index: 2,
    },
    {
        id: "uuid-tpl-ex-8",
        template_id: "uuid-tpl-4",
        exercise_id: "uuid-ex-3",
        sets: 5,
        reps: 8,
        rest_seconds: 150,
        order_index: 1,
    },
    {
        id: "uuid-tpl-ex-9",
        template_id: "uuid-tpl-4",
        exercise_id: "uuid-ex-4",
        sets: 3,
        reps: 12,
        rest_seconds: 90,
        order_index: 2,
    },
    {
        id: "uuid-tpl-ex-10",
        template_id: "uuid-tpl-5",
        exercise_id: "uuid-ex-4",
        sets: 4,
        reps: 10,
        rest_seconds: 90,
        order_index: 1,
    },
    {
        id: "uuid-tpl-ex-11",
        template_id: "uuid-tpl-6",
        exercise_id: "uuid-ex-1",
        sets: 2,
        reps: 15,
        rest_seconds: 60,
        order_index: 1,
    },
    {
        id: "uuid-tpl-ex-12",
        template_id: "uuid-tpl-6",
        exercise_id: "uuid-ex-2",
        sets: 2,
        reps: 12,
        rest_seconds: 60,
        order_index: 2,
    },
    {
        id: "uuid-tpl-ex-13",
        template_id: "uuid-tpl-6",
        exercise_id: "uuid-ex-3",
        sets: 2,
        reps: 20,
        rest_seconds: 60,
        order_index: 3,
    },
    {
        id: "uuid-tpl-ex-14",
        template_id: "uuid-tpl-7",
        exercise_id: "uuid-ex-2",
        sets: 3,
        reps: 15,
        rest_seconds: 45,
        order_index: 1,
    },
    {
        id: "uuid-tpl-ex-15",
        template_id: "uuid-tpl-7",
        exercise_id: "uuid-ex-4",
        sets: 3,
        reps: 20,
        rest_seconds: 45,
        order_index: 2,
    },
    {
        id: "uuid-tpl-ex-16",
        template_id: "uuid-tpl-2",
        exercise_id: "uuid-ex-3",
        sets: 3,
        reps: 10,
        rest_seconds: 120,
        order_index: 3,
    },
    {
        id: "uuid-tpl-ex-17",
        template_id: "uuid-tpl-3",
        exercise_id: "uuid-ex-1",
        sets: 3,
        reps: 12,
        rest_seconds: 90,
        order_index: 3,
    },
    {
        id: "uuid-tpl-ex-18",
        template_id: "uuid-tpl-4",
        exercise_id: "uuid-ex-2",
        sets: 4,
        reps: 10,
        rest_seconds: 120,
        order_index: 3,
    },
    {
        id: "uuid-tpl-ex-19",
        template_id: "uuid-tpl-5",
        exercise_id: "uuid-ex-1",
        sets: 4,
        reps: 8,
        rest_seconds: 90,
        order_index: 2,
    },
    {
        id: "uuid-tpl-ex-20",
        template_id: "uuid-tpl-6",
        exercise_id: "uuid-ex-4",
        sets: 3,
        reps: 12,
        rest_seconds: 60,
        order_index: 4,
    },
];

export const getWorkoutTemplateExercises = async (
    workoutTemplateId: string
) => {
    try {
        const workoutTemplateExercises = WORKOUT_TEMPLATE_EXERCISES.map(
            transformWorkoutTemplateExercise
        ).filter((item) => item.templateId === workoutTemplateId);

        return {
            workoutTemplateExercises: workoutTemplateExercises,
            message: null,
        };
    } catch (err) {
        return {
            workoutTemplateExercises: null,
            message:
                "Ошибка при получении упражнений из шаблона. Попробуйте позже.",
        };
    }
};
