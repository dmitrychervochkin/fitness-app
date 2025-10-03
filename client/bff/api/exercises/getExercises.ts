import { transformExercise } from "@/bff/transformers";

// ====================== MOCK DATA ======================
const EXERCISES = [
    {
        id: "uuid-ex-1",
        name: "Жим штанги лёжа",
        description: "Базовое упражнение для груди",
        muscle_group_id: "uuid-mg-1",
        equipment: "Штанга",
        created_by: "uuid-user-1",
        created_at: "2025-08-01",
    },
    {
        id: "uuid-ex-2",
        name: "Подтягивания",
        description: "Классика для спины и бицепса",
        muscle_group_id: "uuid-mg-2",
        equipment: "Турник",
        created_by: "uuid-user-1",
        created_at: "2025-08-01",
    },
    {
        id: "uuid-ex-3",
        name: "Приседания со штангой",
        description: "Базовое упражнение для ног",
        muscle_group_id: "uuid-mg-3",
        equipment: "Штанга",
        created_by: "uuid-user-2",
        created_at: "2025-08-10",
    },
    {
        id: "uuid-ex-4",
        name: "Жим гантелей сидя",
        description: "Развитие плечевых дельт",
        muscle_group_id: "uuid-mg-4",
        equipment: "Гантели",
        created_by: "uuid-user-1",
        created_at: "2025-08-12",
    },
];

export const getExercises = async () => {
    try {
        const exercises = EXERCISES.map(transformExercise);

        return { exercises: exercises, message: null };
    } catch (err) {
        return {
            exercises: null,
            message: "Ошибка при получении упражнений. Попробуйте позже.",
        };
    }
};
