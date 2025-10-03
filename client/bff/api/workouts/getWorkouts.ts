import { transformWorkout } from "@/bff/transformers";

// ====================== MOCK DATA ======================
const WORKOUTS = [
    {
        id: "uuid-wo-1",
        user_id: "uuid-user-1",
        template_id: "uuid-tpl-1",
        date: "2025-08-10",
        duration: 60,
        total_weight: 5000,
        notes: "Тренировка #1",
        created_at: "2025-08-10T18:00:00Z",
    },
    {
        id: "uuid-wo-2",
        user_id: "uuid-user-2",
        template_id: "uuid-tpl-2",
        date: "2025-08-11",
        duration: 65,
        total_weight: 5400,
        notes: "Тренировка #2",
        created_at: "2025-08-11T18:00:00Z",
    },
    {
        id: "uuid-wo-3",
        user_id: "uuid-user-3",
        template_id: "uuid-tpl-3",
        date: "2025-08-12",
        duration: 70,
        total_weight: 5800,
        notes: "Тренировка #3",
        created_at: "2025-08-12T18:00:00Z",
    },
    {
        id: "uuid-wo-4",
        user_id: "uuid-user-1",
        template_id: "uuid-tpl-4",
        date: "2025-08-13",
        duration: 75,
        total_weight: 6200,
        notes: "Тренировка #4",
        created_at: "2025-08-13T18:00:00Z",
    },
    {
        id: "uuid-wo-5",
        user_id: "uuid-user-2",
        template_id: "uuid-tpl-5",
        date: "2025-08-14",
        duration: 80,
        total_weight: 6600,
        notes: "Тренировка #5",
        created_at: "2025-08-14T18:00:00Z",
    },
    {
        id: "uuid-wo-6",
        user_id: "uuid-user-3",
        template_id: "uuid-tpl-6",
        date: "2025-08-15",
        duration: 85,
        total_weight: 7000,
        notes: "Тренировка #6",
        created_at: "2025-08-15T18:00:00Z",
    },
    {
        id: "uuid-wo-7",
        user_id: "uuid-user-1",
        template_id: "uuid-tpl-7",
        date: "2025-08-16",
        duration: 90,
        total_weight: 7400,
        notes: "Тренировка #7",
        created_at: "2025-08-16T18:00:00Z",
    },
    {
        id: "uuid-wo-8",
        user_id: "uuid-user-2",
        template_id: "uuid-tpl-1",
        date: "2025-08-17",
        duration: 95,
        total_weight: 7800,
        notes: "Тренировка #8",
        created_at: "2025-08-17T18:00:00Z",
    },
    {
        id: "uuid-wo-9",
        user_id: "uuid-user-3",
        template_id: "uuid-tpl-2",
        date: "2025-08-18",
        duration: 100,
        total_weight: 8200,
        notes: "Тренировка #9",
        created_at: "2025-08-18T18:00:00Z",
    },
    {
        id: "uuid-wo-10",
        user_id: "uuid-user-1",
        template_id: "uuid-tpl-3",
        date: "2025-08-19",
        duration: 105,
        total_weight: 8600,
        notes: "Тренировка #10",
        created_at: "2025-08-19T18:00:00Z",
    },
];

export const getWorkouts = async () => {
    try {
        const workouts = WORKOUTS.map(transformWorkout);

        return { workouts: workouts, message: null };
    } catch (err) {
        return {
            workouts: null,
            message: "Ошибка при получении тренировок. Попробуйте позже.",
        };
    }
};
