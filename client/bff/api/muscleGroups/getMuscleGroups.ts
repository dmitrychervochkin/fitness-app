// ====================== MOCK DATA ======================
const MUSCLE_GROUPS = [
    {
        id: "uuid-mg-1",
        name: "Грудь",
        description: "Нагрузка на грудные мышцы",
    },
    {
        id: "uuid-mg-2",
        name: "Спина",
        description: "Тяги, подтягивания, становая",
    },
    {
        id: "uuid-mg-3",
        name: "Ноги",
        description: "Присед, жим ногами, выпады",
    },
    { id: "uuid-mg-4", name: "Плечи", description: "Жимы и подъемы гантелей" },
    {
        id: "uuid-mg-5",
        name: "Руки",
        description: "Бицепс, трицепс, предплечья",
    },
];

export const getMuscleGroups = async () => {
    try {
        return { muscleGroups: MUSCLE_GROUPS, message: null };
    } catch (err) {
        return {
            muscleGroups: null,
            message: "Ошибка при получении мышечных групп. Попробуйте позже.",
        };
    }
};
