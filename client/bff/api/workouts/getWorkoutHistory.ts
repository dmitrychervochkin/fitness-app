import { transformWorkoutHistory } from "@/bff/transformers";

export const WORKOUT_HISTORY = [
    {
        month: "2025-08",
        workouts: [
            {
                id: "uuid-wo-1",
                date: "2025-08-10",
                duration: 3600, // 60 минут
                total_weight: 5000,
                notes: "Тренировка #1",
                template_id: "uuid-tpl-1",
                template_name: "Сила и масса",
                exercises: [
                    { name: "Жим штанги лёжа", reps: 2 },
                    { name: "Приседания со штангой", reps: 1 },
                ],
            },
            {
                id: "uuid-wo-2",
                date: "2025-08-11",
                duration: 3900, // 65 минут
                total_weight: 5400,
                notes: "Тренировка #2",
                template_id: "uuid-tpl-2",
                template_name: "Спина и бицепс",
                exercises: [
                    { name: "Подтягивания", reps: 2 },
                    { name: "Жим гантелей сидя", reps: 1 },
                ],
            },
            {
                id: "uuid-wo-3",
                date: "2025-08-12",
                duration: 4200,
                total_weight: 5800,
                notes: "Тренировка #3",
                template_id: "uuid-tpl-3",
                template_name: "Ноги и база",
                exercises: [
                    { name: "Приседания со штангой", reps: 2 },
                    { name: "Жим штанги лёжа", reps: 1 },
                ],
            },
            {
                id: "uuid-wo-4",
                date: "2025-08-13",
                duration: 4500,
                total_weight: 6200,
                notes: "Тренировка #4",
                template_id: "uuid-tpl-4",
                template_name: "Плечи и трицепс",
                exercises: [
                    { name: "Жим гантелей сидя", reps: 2 },
                    { name: "Подтягивания", reps: 1 },
                ],
            },
            {
                id: "uuid-wo-5",
                date: "2025-08-14",
                duration: 4800,
                total_weight: 6600,
                notes: "Тренировка #5",
                template_id: "uuid-tpl-5",
                template_name: "Сила и масса",
                exercises: [
                    { name: "Жим штанги лёжа", reps: 2 },
                    { name: "Приседания со штангой", reps: 1 },
                ],
            },
            {
                id: "uuid-wo-6",
                date: "2025-08-15",
                duration: 5100,
                total_weight: 7000,
                notes: "Тренировка #6",
                template_id: "uuid-tpl-6",
                template_name: "Спина и бицепс",
                exercises: [
                    { name: "Подтягивания", reps: 2 },
                    { name: "Жим гантелей сидя", reps: 1 },
                ],
            },
            {
                id: "uuid-wo-7",
                date: "2025-08-16",
                duration: 5400,
                total_weight: 7400,
                notes: "Тренировка #7",
                template_id: "uuid-tpl-7",
                template_name: "Ноги и база",
                exercises: [
                    { name: "Приседания со штангой", reps: 2 },
                    { name: "Жим штанги лёжа", reps: 1 },
                ],
            },
            {
                id: "uuid-wo-8",
                date: "2025-08-17",
                duration: 5700,
                total_weight: 7800,
                notes: "Тренировка #8",
                template_id: "uuid-tpl-1",
                template_name: "Сила и масса",
                exercises: [
                    { name: "Жим гантелей сидя", reps: 2 },
                    { name: "Подтягивания", reps: 1 },
                ],
            },
            {
                id: "uuid-wo-9",
                date: "2025-08-18",
                duration: 6000,
                total_weight: 8200,
                notes: "Тренировка #9",
                template_id: "uuid-tpl-2",
                template_name: "Спина и бицепс",
                exercises: [
                    { name: "Жим штанги лёжа", reps: 2 },
                    { name: "Приседания со штангой", reps: 1 },
                ],
            },
            {
                id: "uuid-wo-10",
                date: "2025-08-19",
                duration: 6300,
                total_weight: 8600,
                notes: "Тренировка #10",
                template_id: "uuid-tpl-3",
                template_name: "Ноги и база",
                exercises: [
                    { name: "Подтягивания", reps: 2 },
                    { name: "Жим гантелей сидя", reps: 1 },
                ],
            },
        ],
    },
    {
        month: "2025-07",
        workouts: [
            {
                id: "uuid-wo-11",
                date: "2025-07-20",
                duration: 4800,
                total_weight: 6400,
                notes: "Жара + треня",
                template_id: "uuid-tpl-1",
                template_name: "Сила и масса",
                exercises: [
                    { name: "Жим штанги лёжа", reps: 2 },
                    { name: "Подтягивания", reps: 2 },
                ],
            },
            {
                id: "uuid-wo-12",
                date: "2025-07-15",
                duration: 4500,
                total_weight: 6000,
                notes: "Ноги в огне",
                template_id: "uuid-tpl-3",
                template_name: "Ноги и база",
                exercises: [{ name: "Приседания со штангой", reps: 2 }],
            },
        ],
    },
    {
        month: "2025-06",
        workouts: [
            {
                id: "uuid-wo-13",
                date: "2025-06-25",
                duration: 3300,
                total_weight: 4800,
                notes: "Быстрая тренировка перед отпуском",
                template_id: "uuid-tpl-4",
                template_name: "Плечи и трицепс",
                exercises: [{ name: "Жим гантелей сидя", reps: 2 }],
            },
            {
                id: "uuid-wo-14",
                date: "2025-06-18",
                duration: 4200,
                total_weight: 5200,
                notes: "Классика",
                template_id: "uuid-tpl-1",
                template_name: "Сила и масса",
                exercises: [
                    { name: "Жим штанги лёжа", reps: 2 },
                    { name: "Подтягивания", reps: 2 },
                ],
            },
            {
                id: "uuid-wo-15",
                date: "2025-06-10",
                duration: 5400,
                total_weight: 7000,
                notes: "Тяжёлая база",
                template_id: "uuid-tpl-3",
                template_name: "Ноги и база",
                exercises: [{ name: "Приседания со штангой", reps: 2 }],
            },
        ],
    },
];

export const getWorkoutHistory = async () => {
    try {
        const workoutHistory = WORKOUT_HISTORY.map(transformWorkoutHistory);

        return { workoutHistory: workoutHistory, message: null };
    } catch (err) {
        return {
            workouts: null,
            message: "Ошибка при получении истории. Попробуйте позже.",
        };
    }
};
