import { transformWorkoutTemplate } from "@/bff/transformers";

// ====================== MOCK DATA ======================
const WORKOUT_TEMPLATES = [
    {
        id: "uuid-tpl-1",
        name: "Фуллбади (новичок)",
        description: "Базовые упражнения на всё тело",
        created_by: "uuid-user-1",
        is_public: true,
        created_at: "2025-08-01",
    },
    {
        id: "uuid-tpl-2",
        name: "Грудь + Трицепс",
        description: "Сплит на верх",
        created_by: "uuid-user-2",
        is_public: true,
        created_at: "2025-08-02",
    },
    {
        id: "uuid-tpl-3",
        name: "Спина + Бицепс",
        description: "Тяги и подтягивания",
        created_by: "uuid-user-2",
        is_public: true,
        created_at: "2025-08-03",
    },
    {
        id: "uuid-tpl-4",
        name: "Ноги",
        description: "Фокус на квадрицепс и ягодицы",
        created_by: "uuid-user-1",
        is_public: true,
        created_at: "2025-08-04",
    },
    {
        id: "uuid-tpl-5",
        name: "Плечи",
        description: "Жимы и махи",
        created_by: "uuid-user-3",
        is_public: true,
        created_at: "2025-08-05",
    },
    {
        id: "uuid-tpl-6",
        name: "Круговая тренировка",
        description: "Кардио + силовые",
        created_by: "uuid-user-3",
        is_public: true,
        created_at: "2025-08-06",
    },
    {
        id: "uuid-tpl-7",
        name: "Core/Пресс",
        description: "Планки, скручивания, вакуум",
        created_by: "uuid-user-1",
        is_public: true,
        created_at: "2025-08-07",
    },
];

export const getWorkoutTemplates = async () => {
    try {
        const workoutTemplates = WORKOUT_TEMPLATES.map(
            transformWorkoutTemplate
        );

        return { workoutTemplates: workoutTemplates, message: null };
    } catch (err) {
        return {
            workoutTemplates: null,
            message:
                "Ошибка при получении шаблонов тренировок. Попробуйте позже.",
        };
    }
};
